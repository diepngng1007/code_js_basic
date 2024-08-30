using System;
using System.ComponentModel.Design.Serialization;

namespace Luyentap1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ThucVatService Service = new ThucVatService();

            while (true)
            {
                Console.WriteLine("\t1.Nhap danh sach doi tuong: ");
                Console.WriteLine("\t2.Xuat danh sach doi tuong: ");
                Console.WriteLine("\t3.Xuat danh sach theo loai cay trong: ");
                Console.WriteLine("\t4.Tim theo ma: ");
                Console.WriteLine("\t5.Ke thua: ");

                Console.WriteLine("Moi ban nhap lua chon: ");
                int choice = Convert.ToInt32(Console.ReadLine());

                if(choice == 0)
                {
                    break;
                }
                switch (choice)
                {
                    case 1:
                        Service.NhapDanhSach();
                        break;
                    case 2:
                        Service.XuatDanhSach();
                        break;
                    case 3:
                        Service.XuatDanhSachTheoLoaiCayTrong();
                        break;
                    case 4:
                        Service.TimTheoMa();
                        break;
                    case 5:
                        Service.KeThua();
                        break;
                }
            }

        }
    }
}
