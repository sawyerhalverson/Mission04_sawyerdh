using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace firstaspwebapp.Models
{
    public class GradeCalculatorModel
    {
        // Add in validation rule for each field
        [Range(0, 100, ErrorMessage = "Assignments must be a number between 1 and 100.")]

        public float Assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Group Project must be a number between 1 and 100.")]

        public float GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes must be a number between 1 and 100.")]

        public float Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm must be a number between 1 and 100.")]

        public float Midterm { get; set; }

        [Range(0, 100, ErrorMessage = "Final must be a number between 1 and 100.")]

        public float Final { get; set; }

        [Range(0, 100, ErrorMessage = "Intex must be a number between 1 and 100.")]

        public float Intex { get; set; }

    }
}
