import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {


   

    totalRecords: number = 6; 
    currentPage: number = 0; 
    rowsPerPage: number = 1; 
    passingGrade: number = 50; 
    timeLimit: number = this.totalRecords;
    quizQuestions: any[] = [
      {
        question: '1. What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
        selectedOption: null,
        isCorrect: false
      },
      {
        question: '2. What is the largest planet in our solar system?',
        options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
        answer: 'Jupiter',
        selectedOption: null,
        isCorrect: false
      },
      {
        question: '3. What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
        selectedOption: null,
        isCorrect: false
      },
      {
        question: '4. What is the largest planet in our solar system?',
        options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
        answer: 'Jupiter',
        selectedOption: null,
        isCorrect: false
      },
      {
        question: '5. What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
        selectedOption: null,
        isCorrect: false
      },
      
      {
        question: '6. What is the largest planet in our solar system?',
        options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
        answer: 'Jupiter',
        selectedOption: null,
        isCorrect: false
      }
    ];
  
    currentQuestion: any; 
  quizStarted: boolean = false; 
  quizFinished: boolean = false;
  correctAnswers: number = 0; 
  startTime: number | null = null;
  endTime: number | null = null; 
  
    constructor() {}
  
    startQuiz() {
      this.quizStarted = true;
      this.startTime = Date.now();
      this.moveToNextQuestion();
    }
  
    loadPageData(event: any) {
      this.currentPage = event.page + 1;
      this.setCurrentQuestion();
    }
  
    setCurrentQuestion() {
      const questionIndex: number = (this.currentPage - 1) * this.rowsPerPage;
      this.currentQuestion = this.quizQuestions[questionIndex];
    }
  
    selectOption(option: string) {
      this.currentQuestion.selectedOption = option;
    }
  
    submitAnswer() {
      this.currentQuestion.isCorrect = this.currentQuestion.selectedOption === this.currentQuestion.answer;
      if (this.currentQuestion.isCorrect) {
        this.correctAnswers++;
      }
  
      const hasNextQuestion: boolean = (this.currentPage * this.rowsPerPage) < this.totalRecords;
      if (hasNextQuestion) {
        this.moveToNextQuestion();
      } else {
        this.quizFinished = true;
        this.endTime = Date.now();
      }
    }
  
    moveToNextQuestion() {
      this.currentPage++;
      this.setCurrentQuestion();
    }
  
    getQuizDuration(): number {
      if (this.startTime && this.endTime) {
        return Math.floor((this.endTime - this.startTime) / 60000); 
      }
      return 0;
    }
  
    getScorePercentage(): number {
      return (this.correctAnswers / this.totalRecords) * 100;
    }
  
    isPassingGrade(): boolean {
      return this.getScorePercentage() >= this.passingGrade;
    }
    restartQuiz() {
      this.quizStarted = false;
      this.quizFinished = false;
      this.currentPage = 1;
      this.correctAnswers = 0;
      this.currentQuestion = null;
    }
  }