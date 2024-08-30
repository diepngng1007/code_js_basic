using System;

namespace Luyentap3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            MonHocService service = new MonHocService();
            while (true)
            {
                Console.WriteLine("\t1. Nhap danh sach doi tuong");
                Console.WriteLine("\t2. Xuat danh sach doi tuong");
                Console.WriteLine("\t3. Xuat danh sach mon hoc theo so tin chi");
                Console.WriteLine("\t4. Sap xep theo hoc phi giam dan");
                Console.WriteLine("\t5. Ke thua");
                Console.WriteLine("\t0. Thoat");

                Console.WriteLine("Nhap lua chon:");
                int choice = Convert.ToInt32(Console.ReadLine());

                if (choice == 0)
                {
                    break;
                }

                switch (choice)
                {
                    case 1:
                        service.NhapDanhSach();
                        break;
                    case 2:
                        service.XuatDanhSach();
                        break;
                    case 3:
                        service.XuatDsTheoTinChi();
                        break;
                    case 4:
                        service.SapXepHocPhiGiamDan();
                        break;
                    case 5:
                        service.KeThua();
                        break;

                }
            }
        }
    }
}
