using Commander.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Commander.Data
{
    public class MockCommanderRepo : ICommanderRepo
    {
        public IEnumerable<Command> GetAppCommands()
        {
            var commands = new List<Command>
            {
            new Command { Id = 0, HowTo = "Jump", Line = "Just do it", Platform = "Real life" },
            new Command { Id = 1, HowTo = "Roll", Line = "Just do it!", Platform = "Real life" },
            new Command { Id = 2, HowTo = "Kick", Line = "Just kick it", Platform = "Real life" }
            };
            return commands;
        }
        public Command GetCommandById(int id)
        {
            return new Command { Id=0, HowTo="Jump", Line="Just do it", Platform="Real life"};
        }
    }
}
