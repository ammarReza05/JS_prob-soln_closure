// 1 st problem is solve the caching problem and handle the private state each questions.


function createQuestion(questionText, correctAnswer) {
  let isAttempted = false;
  let isCorrect = false;
  let score = 0;
  let lastAttempt = null;

  const cachedAttemptCheck = createCachedFunction((answer) => {
    if (answer === correctAnswer) {
      isCorrect = true;
      score = 1;
      return "Correct!";
    } else {
      isCorrect = false;
      score = 0;
      return "Wrong!";
    }
  });

  const api = {
    attempt(answer) {
      if (isAttempted) {
        console.log("Already attempted.");
        return api;
      }
      isAttempted = true;
      lastAttempt = answer;
      return api;
    },
    check() {
      if (!isAttempted) {
        console.log("Attempt the question first.");
      } else {
        const result = cachedAttemptCheck(lastAttempt);
        console.log(`Check: ${result}`);
      }
      return api;
    },
    score() {
      console.log(`Score: ${score}`);
      return api;
    },
    log() {
      console.log({
        question: questionText,
        isAttempted,
        isCorrect,
        score,
        lastAttempt,
      });
      return api;
    },
    reset() {
      isAttempted = false;
      isCorrect = false;
      score = 0;
      lastAttempt = null;
      console.log("Reset done.");
      return api;
    }
  };

  return api;
}

//  Caching Function,Kisi answer ko baar-baar evaluate na karein agar woh pehle hi evaluate ho chuka ho.
//function ke result ko memory me cache karta hai.Agar same input dubara aaye, to direct cache se answer deta hai
//.Memory efficient hai (max cache size limit hoti hai). Yeh system check() ke andar answer verification ko fast aur efficient banata hai.


function createCachedFunction(fn, maxSize = 5) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      console.log("Returning from cache");
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);

    if (cache.size > maxSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    return result;
  };
}

const q1 = createQuestion("What is 2 + 2?", 4);
const q2 = createQuestion("Capital of France?", "Paris");

q1
  .attempt(4)
  .check()
  .score()
  .log();

q2
  .attempt("London")
  .check()
  .score()
  .log()
  .reset()
  .attempt("Paris")
  .check()
  .log();

//simple chainable api


function createPerson() {
  let name = "";
  let age = 0;
  let job = "";

  const person = {
    setName(n) {
      name = n;
      return person;
    },
    setAge(a) {
      age = a;
      return person;
    },
    setJob(a) {
      job = a;
      return person;
    },
    print() {
      console.log(`Name: ${name}, Age: ${age},Job; ${job}`);
      return person;
    },
  };

  return person;
}

createPerson()
  .setName("Rishav")
  .setAge(25)
  .setJob("Manager")
  .print()
  .setName("Rishav")
  .setAge(59)
  .setJob("Junior")
  .print();


