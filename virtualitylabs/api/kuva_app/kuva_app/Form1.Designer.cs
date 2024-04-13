namespace kuva_app
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            menuStrip1 = new MenuStrip();
            uusiKuvaToolStripMenuItem = new ToolStripMenuItem();
            valitseKuvatToolStripMenuItem = new ToolStripMenuItem();
            poistaValitutToolStripMenuItem = new ToolStripMenuItem();
            tyhjennaValitutToolStripMenuItem = new ToolStripMenuItem();
            openFileDialog2 = new OpenFileDialog();
            flowLayoutPanel = new FlowLayoutPanel();
            menuStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // menuStrip1
            // 
            menuStrip1.Items.AddRange(new ToolStripItem[] { uusiKuvaToolStripMenuItem, valitseKuvatToolStripMenuItem, poistaValitutToolStripMenuItem, tyhjennaValitutToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Size = new Size(692, 24);
            menuStrip1.TabIndex = 0;
            menuStrip1.Text = "menuStrip1";
            // 
            // uusiKuvaToolStripMenuItem
            // 
            uusiKuvaToolStripMenuItem.Name = "uusiKuvaToolStripMenuItem";
            uusiKuvaToolStripMenuItem.Size = new Size(98, 20);
            uusiKuvaToolStripMenuItem.Text = "Lisää uusi kuva";
            uusiKuvaToolStripMenuItem.Click += tallennaButton_Click;
            // 
            // valitseKuvatToolStripMenuItem
            // 
            valitseKuvatToolStripMenuItem.Name = "valitseKuvatToolStripMenuItem";
            valitseKuvatToolStripMenuItem.Size = new Size(160, 20);
            valitseKuvatToolStripMenuItem.Text = "Näytä valitut verkkosivuilla";
            valitseKuvatToolStripMenuItem.Click += valitseKuvatToolStripMenuItem_Click;
            // 
            // poistaValitutToolStripMenuItem
            // 
            poistaValitutToolStripMenuItem.Name = "poistaValitutToolStripMenuItem";
            poistaValitutToolStripMenuItem.Size = new Size(87, 20);
            poistaValitutToolStripMenuItem.Text = "Poista valitut";
            poistaValitutToolStripMenuItem.Click += poistaValitutToolStripMenuItem_Click;
            // 
            // tyhjennaValitutToolStripMenuItem
            // 
            tyhjennaValitutToolStripMenuItem.Name = "tyhjennaValitutToolStripMenuItem";
            tyhjennaValitutToolStripMenuItem.Size = new Size(101, 20);
            tyhjennaValitutToolStripMenuItem.Text = "tyhjennä valitut";
            tyhjennaValitutToolStripMenuItem.Click += tyhjennaValitutToolStripMenuItem_Click;
            // 
            // flowLayoutPanel
            // 
            flowLayoutPanel.Location = new Point(88, 95);
            flowLayoutPanel.Name = "flowLayoutPanel";
            flowLayoutPanel.Size = new Size(200, 100);
            flowLayoutPanel.TabIndex = 1;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(692, 434);
            Controls.Add(flowLayoutPanel);
            Controls.Add(menuStrip1);
            Name = "Form1";
            Text = "Form1";
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private MenuStrip menuStrip1;
        private ToolStripMenuItem uusiKuvaToolStripMenuItem;
        private ToolStripMenuItem valitseKuvatToolStripMenuItem;
        private OpenFileDialog openFileDialog2;
        private FlowLayoutPanel flowLayoutPanel;
        private ToolStripMenuItem poistaValitutToolStripMenuItem;
        private ToolStripMenuItem tyhjennaValitutToolStripMenuItem;
    }
}
