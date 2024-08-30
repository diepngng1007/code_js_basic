using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap
{
    internal class SinhVienService
    {
        //cu phap cua list : List<kieu du lieu cua cac thanh phan trong list> tenlist = new List<kieu du lieu> ();
        List<SinhVienPoly> SvPoly = new List<SinhVienPoly> ();

        public void NhapDanhSachSV()
        {
            Console.WriteLine("Ban muon nhap bao nhieu SV?");
            int n = Convert.ToInt32(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Nhap ten:");
                string sTen = Console.ReadLine();
                Console.WriteLine("Nhap diem:");
                double sDiem = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Nhap nganh:");
                int sNganh = Convert.ToInt32(Console.ReadLine());

                //khai bao doi tuong ten la sv thuoc kieu du lieu SinhVienPoly 
                SinhVienPoly sv = new SinhVienPoly(sDiem, sTen, sNganh);
                
             //cu phap them phan tu vao trong list
             //tenlist.Add(ten phan tu muon them)
             SvPoly.Add(sv);
            }
        }

        public void XuatDanhSach()
        {
            for (int i = 0; i < this.SvPoly.Count; i++)
            {
                SvPoly[i].XuatThongTin();
            }
        }
        public void XuatSVKhaGioi()
        {
            for(int i = 0; i < SvPoly.Count;i++)
            {
            /*    if (string.Equals("Kha", this.SvPoly[i].GetHocLuc()) || String.Equals("Gioi", this.SvPoly[i].GetHocLuc()))
                {
                    this.SvPoly[i].XuatThongTin();
                }
*/
                switch (SvPoly[i].GetHocLuc())
                {
                    case "Kha":
                        SvPoly[i].XuatThongTin();
                        break;
                    case "Gioi":
                        SvPoly[i].XuatThongTin();
                        break;
                }
            }
        }
        public void TimSvTheoTen()
        {
            Console.WriteLine("Nhap ten SV muon tim: ");
            string name = Console.ReadLine();

            for (int i = 0; i < this.SvPoly.Count; i++)
            {
                // trong ngoặc equals truyền vào 2 cái string để nó so sánh, trc khi so sánh thì chuyển 2 string thành viêt thường
                if (string.Equals(name.ToLower(), this.SvPoly[i].Ten.ToLower())) 
                {
                    this.SvPoly[i].XuatThongTin();
                }
            }

           
        }
        public void KeThua()
        {
            SinhVienTKTW SvTKTW = new SinhVienTKTW(5.6, 5.5, 4.1, "abc", 1);
            SvTKTW.XuatThongTin();
        }
    }
}
