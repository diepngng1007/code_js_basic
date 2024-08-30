using System;

namespace Luyentap
{
    internal class Program
    {
        static void Main(string[] args)
        {
          

            SinhVienService service = new SinhVienService();
            while (true)
            {
                Console.WriteLine("\t1. Nhap danh sach sinh vien");
                Console.WriteLine("\t2. Xuat danh sach sinh vien");
                Console.WriteLine("\t3. Xuat danh sach cac sinh vien kha, gioi");
                Console.WriteLine("\t4. Tim sinh vien theo ten");
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
                        service.NhapDanhSachSV();
                        break;
                    case 2:
                        service.XuatDanhSach();
                        break;
                    case 3:
                        service.XuatSVKhaGioi();
                        break;
                    case 4:
                        service.TimSvTheoTen();
                        break;
                    case 5:
                        service.KeThua();
                        break;
                 
                }
            }

        }
    }
}
