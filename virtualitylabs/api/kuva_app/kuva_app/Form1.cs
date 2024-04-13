using System.Diagnostics;
using System.Security;
using System.Windows.Forms;
using MySql.Data.MySqlClient;


namespace kuva_app
{
    public partial class Form1 : Form
    {
        string connectionString = "Server=virtualitylabs.cr2ueqokwzru.eu-north-1.rds.amazonaws.com;Port=3306;Database=virtualitylabs;Uid=masterDoer9000;Pwd=Killermasa69";


        public Form1()
        {
            InitializeComponent();


            GetPicturesFromDataBase();


        }



        private void GetPicturesFromDataBase()
        {
            //string sql = "SELECT image FROM kuva where idkuva = @imageID";
            string sql = "SELECT idkuva, valittu, image from kuva";
            int imageID = 1;

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {

                MySqlCommand command = new MySqlCommand(sql, connection);
                //command.Parameters.Add("@imageID", MySqlDbType.Int32).Value = imageID;

                try
                {
                    connection.Open();
                    MySqlDataReader reader = command.ExecuteReader();

                    //FlowLayoutPanel flowLayoutPanel = new FlowLayoutPanel();
                    flowLayoutPanel.Dock = DockStyle.Fill;
                    flowLayoutPanel.AutoScroll = true;
                    Controls.Add(flowLayoutPanel);


                    int pictureBoxLeft = 0;
                    int pictureBoxTop = 10;

                    int tabPageWidth = Width - 20;
                    int availableWidth = tabPageWidth - pictureBoxLeft;

                    while (reader.Read())
                    {
                        byte[] imageData = (byte[])reader["image"];
                        Image image = ByteArrayToImage(imageData);
                        bool isSelected = reader.GetInt32("valittu") == 1; // Check if valittu is 1

                        SelectablePictureBox pictureBox = new SelectablePictureBox();
                        pictureBox.Tag = reader["idkuva"];
                        pictureBox.Image = image;
                        pictureBox.SizeMode = PictureBoxSizeMode.StretchImage;

                        if (pictureBox.Width > availableWidth)
                        {
                            double scaleFactor = (double)availableWidth / pictureBox.Width;
                            pictureBox.Width = (int)(pictureBox.Width * scaleFactor);
                            pictureBox.Height = (int)(pictureBox.Height * scaleFactor);
                        }

                        pictureBox.Left = pictureBoxLeft;
                        pictureBox.Top = pictureBoxTop;
                        pictureBox.Width = 150;
                        pictureBox.Height = 150;

                        pictureBox.IsSelected = isSelected;

                        pictureBoxLeft += pictureBox.Width + 100;
                        availableWidth -= pictureBox.Width + 100;

                        if (pictureBoxLeft + pictureBox.Width > tabPageWidth)
                        {
                            pictureBoxLeft = 0;
                            pictureBoxTop += pictureBox.Height + pictureBoxTop;
                        }



                        flowLayoutPanel.Controls.Add(pictureBox);

                    }
                    reader.Close();
                    flowLayoutPanel.Padding = new Padding(0, 10, 0, 0);

                }
                catch (MySqlException ex)
                {
                    MessageBox.Show(ex.ToString());
                }


            }
        }


        static Image ByteArrayToImage(byte[] byteArray)
        {
            using (MemoryStream ms = new MemoryStream(byteArray))
            {
                Image image = Image.FromStream(ms);
                return image;
            }
        }





        private void tallennaButton_Click(object sender, EventArgs e)
        {
            openFileDialog2.Multiselect = true;
            DialogResult dr = openFileDialog2.ShowDialog();
            if (dr == DialogResult.OK)
            {


                foreach (String file in openFileDialog2.FileNames)
                {
                    //textBox1.Text = file;
                    string imagePath = file;
                    byte[] imageData = File.ReadAllBytes(imagePath);


                    using (MySqlConnection connection = new MySqlConnection(connectionString))
                    {
                        try
                        {

                            //string query = "select * from kuva";
                            string query = "INSERT INTO kuva (image, valittu) VALUES (@imageData, 0)";

                            MySqlCommand cmd = new MySqlCommand(query, connection);
                            cmd.Parameters.Add("@imageData", MySqlDbType.LongBlob).Value = imageData;
                            connection.Open();
                            //int rowsAffected = cmd.ExecuteNonQuery();
                            //MessageBox.Show($"Image inserted successfully. {rowsAffected} rows affected.");
                            MySqlDataReader reader = cmd.ExecuteReader();
                            while (reader.Read())
                            {
                                MessageBox.Show("Id " + reader["idkuva"] + " Nimi " + reader["nimi"] + " valittu " + reader["valittu"]);
                            }

                        }
                        catch (MySqlException ex)
                        {
                            MessageBox.Show(ex.ToString());
                        }
                    }
                }

                string projectDirectory = Directory.GetParent(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.FullName;
                string kuvatFolderPath = Path.Combine(projectDirectory, "kuvat");
                Debug.WriteLine("sijainti: " + kuvatFolderPath);

                if (flowLayoutPanel != null)
                {
                    Controls.Remove(flowLayoutPanel);
                    flowLayoutPanel.Dispose();
                }

                // Reinitialize FlowLayoutPanel
                flowLayoutPanel = new FlowLayoutPanel();
                GetPicturesFromDataBase();
            }
        }

        private void valitseKuvatToolStripMenuItem_Click(object sender, EventArgs e)
        {

            foreach (SelectablePictureBox pictureBox in flowLayoutPanel.Controls)
            {
                // Determine the ID of the picture based on your application logic
                int pictureID = GetPictureIDFromDatabase(pictureBox); // Implement this method to get picture ID from database

                // Determine if the picture is selected
                bool isSelected = pictureBox.IsSelected;

                // Update the valittu field in the database based on selection status
                UpdateValittuFieldInDatabase(pictureID, isSelected);
            }

        }

        private void UpdateValittuFieldInDatabase(int pictureID, bool isSelected)
        {
            // Your code to update the valittu field in the database
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string updateQuery = "UPDATE kuva SET valittu = @valittu WHERE idkuva = @idkuva";

                MySqlCommand command = new MySqlCommand(updateQuery, connection);
                command.Parameters.AddWithValue("@valittu", isSelected ? 1 : 0); // Convert boolean to integer
                command.Parameters.AddWithValue("@idkuva", pictureID);

                try
                {
                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    Console.WriteLine($"{rowsAffected} rows updated.");
                }
                catch (MySqlException ex)
                {
                    MessageBox.Show("Error updating database: " + ex.Message);
                }
            }
        }

        private int GetPictureIDFromDatabase(SelectablePictureBox pictureBox)
        {
            if (pictureBox.Tag != null && pictureBox.Tag is int)
            {
                return (int)pictureBox.Tag; // Return the ID stored in the Tag property
            }
            else
            {
                throw new InvalidOperationException("Picture ID not found for the SelectablePictureBox.");
            }
        }

        private void poistaValitutToolStripMenuItem_Click(object sender, EventArgs e)
        {

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {

                connection.Open();

                foreach (SelectablePictureBox pictureBox in flowLayoutPanel.Controls)
                {
                    int pictureID = 0;
                    if (pictureBox.IsSelected == true)
                    {
                        pictureID = GetPictureIDFromDatabase(pictureBox);
                    }
                    
                    string deleteQuery = "DELETE from kuva where idkuva = " + pictureID;

                    MySqlCommand command = new MySqlCommand(deleteQuery, connection);

                    try
                    {
                        
                        int rowsAffected = command.ExecuteNonQuery();
                        Console.WriteLine($"{rowsAffected} rows updated.");
                    }
                    catch (MySqlException ex)
                    {
                        MessageBox.Show("Error updating database: " + ex.Message);
                    }
                }

                if (flowLayoutPanel != null)
                {
                    Controls.Remove(flowLayoutPanel);
                    flowLayoutPanel.Dispose();
                }

                // Reinitialize FlowLayoutPanel
                flowLayoutPanel = new FlowLayoutPanel();
                GetPicturesFromDataBase();
            }
        }

        private void tyhjennaValitutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            foreach (Control control in flowLayoutPanel.Controls)
            {
                if (control is SelectablePictureBox pictureBox)
                {
                    pictureBox.IsSelected = false;
                }
            }
        }
    }
}
