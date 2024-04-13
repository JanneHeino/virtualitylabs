using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kuva_app
{
    public class SelectablePictureBox : PictureBox
    {
        private bool isSelected = false;
        private Color selectedBorderColor = Color.LightBlue;

        public bool IsSelected
        {
            get { return isSelected; }
            set
            {
                isSelected = value;
                Invalidate();
                    
            }
        }
        public Color BorderColor { get; set; } = Color.DeepSkyBlue; // Property to set border color


        public SelectablePictureBox()
        {
            this.Click += SelectablePictureBox_Click;
        }

        private void SelectablePictureBox_Click(object sender, EventArgs e)
        {
            IsSelected = !IsSelected; // Toggle selection
        }


        protected override void OnPaint(PaintEventArgs pe)
        {
            base.OnPaint(pe);
            if (IsSelected)
            {
                ControlPaint.DrawBorder(pe.Graphics, this.ClientRectangle,
                    this.BorderColor, 4, ButtonBorderStyle.Solid, // Adjust thickness here (3 pixels)
                    this.BorderColor, 4, ButtonBorderStyle.Solid,
                    this.BorderColor, 4, ButtonBorderStyle.Solid,
                    this.BorderColor, 4, ButtonBorderStyle.Solid);
            }
        }
    }
}
