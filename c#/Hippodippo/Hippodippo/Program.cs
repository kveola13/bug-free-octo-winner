using System;

namespace Hippodippo
{
    class Program
    {
        static void Main(string[] args)
        {
            Tas();
            Book book = new Book("test", "author", 300);
            Console.WriteLine(book.ToString());
        }

        private static void Tas()
        {
            string phrase = "aaaaa";
            Console.WriteLine(phrase.IndexOf("a"));
        }
    }
}