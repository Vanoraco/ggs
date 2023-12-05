// quiz.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizQuestions: any[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      selectedOption: null,
      isCorrect: false
    },

    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
      answer: 'Jupiter',
      selectedOption: null,
      isCorrect: false
    },
    
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      selectedOption: null,
      isCorrect: false
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
      answer: 'Jupiter',
      selectedOption: null,
      isCorrect: false
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      selectedOption: null,
      isCorrect: false
    },
    
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
      answer: 'Jupiter',
      selectedOption: null,
      isCorrect: false
    }
  ];

  constructor() {}

  getQuizQuestions(): any[] {
    return this.quizQuestions;
  }
  getTotalQuestions(): number {
    return this.quizQuestions.length;
  }
}
