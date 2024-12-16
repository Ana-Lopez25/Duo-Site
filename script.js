const quizData = [
    {
      question: "Who was the first K-pop group to perform at Madison Square Garden in New York?",
      options: ["BTS", "EXO", "BLACKPINK", "TWICE"],
      answer: 0
    },
    {
      question: "Which K-pop group released the song 'DDU-DU DDU-DU'?",
      options: ["Red Velvet", "BLACKPINK", "Girls' Generation", "ITZY"],
      answer: 1
    },
    {
      question: "In what year did the group BTS debut?",
      options: ["2013", "2015", "2010", "2017"],
      answer: 0
    },
    {
      question: "Who is known as the 'King of K-pop'?",
      options: ["G-Dragon", "Taeyang", "Jungkook", "Kai"],
      answer: 0
    },
    {
      question: "Which female K-pop group has the fandom called 'ONCE'?",
      options: ["TWICE", "BLACKPINK", "Red Velvet", "IZ*ONE"],
      answer: 0
    }
  ];

  const quizContainer = document.getElementById('quiz-container');

  // Render quiz questions
  quizData.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('text-left', 'p-4', 'bg-gray-800', 'rounded-lg');
    questionDiv.innerHTML = `
      <p class='text-lg font-serif text-pink-400 mb-4'>${index + 1}. ${data.question}</p>
      <div class="space-y-2">
        ${data.options.map((option, i) => `
          <label class="block">
            <input type="radio" name="question${index}" value="${i}" class="mr-2">
            ${option}
          </label>
        `).join('')}
      </div>
      <p class="mt-2 text-sm hidden text-pink-500" id="feedback${index}"></p>
    `;
    quizContainer.appendChild(questionDiv);

    // Add event listener for each option
    const options = questionDiv.querySelectorAll(`input[name="question${index}"]`);
    options.forEach(option => {
      option.addEventListener('change', (e) => {
        const feedback = document.getElementById(`feedback${index}`);
        const selectedValue = parseInt(e.target.value, 10);
        if (selectedValue === data.answer) {
          feedback.textContent = "Correct Answer!";
          feedback.classList.remove('hidden', 'text-red-400');
          feedback.classList.add('text-green-400');
        } else {
          feedback.textContent = "Wrong Answer.";
          feedback.classList.remove('hidden', 'text-green-400');
          feedback.classList.add('text-red-400');
        }
      });
    });
  });