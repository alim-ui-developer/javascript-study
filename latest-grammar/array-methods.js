let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// map 문제
const question_map = (index) => {
  let namesNewArray = [];

  const question = (index) => {
    console.log(`========== [ ▼ map 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        names.map((name) => {
          return namesNewArray.push(name.toUpperCase());
        })
        
        break;
      }
      // 2번 문제
      case 2: {
        names.map((name) => {
          const getName = name.split(" ")[0];
          return namesNewArray.push(getName);
        })

        break;
      }
      // 3번 문제
      case 3: {
        names.map((name) => {
          const getNameInitial = () =>{
            let initialArray = [];
            let nameArray = name.split(" ");
            
            nameArray.map((arr) => {
              return initialArray.push(arr.slice(0, 1));
            })
            return initialArray.join('');
          } 
          return namesNewArray.push(getNameInitial());
        })
      }
      default:
        break;
    }

    console.log(namesNewArray);
    console.log("");
  }

  // 정답 출력
  question(index)
}


// filter 문제
const question_filter = (index) => {
  let namesNewArray = [];

  const question = (index) => {
    console.log(`========== [ ▼ filter 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        names.filter((name) => {
          return name.includes('a') && namesNewArray.push(name);
        })

        break;
      }
      // 2번 문제
      case 2: {
        names.filter((name) => {
          let nameAlphabets = [...name.replace(/\s/g, "")];

          for(let i = 0; i < nameAlphabets.length; i++){
            nameAlphabets[i] === nameAlphabets[i-1] && !namesNewArray.includes(name) && namesNewArray.push(name);
          }
          return namesNewArray;
        })

        break;
      }
      default:
        break;
    }

    console.log(namesNewArray);
    console.log("");
  }

  // 정답 출력
  question(index)
}


// some 문제
const question_some = (index) => {
  const question = (index) => {
    console.log(`========== [ ▼ some 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        const question1 = names.some((name) => {
          return name.length >= 20;
        })

        console.log(question1);
        
        break;
      }
      // 2번 문제
      case 2: {
        const question2 = names.some((name) => {
          const getName = name.split(" ")[0];
          return getName.toLowerCase().includes('p');
        })

        console.log(question2);

        break;
      }
      default:
        break;
    }

    console.log("");
  }

  // 정답 출력
  question(index)
}


// every 문제
const question_every = (index) => {
  const question = (index) => {
    console.log(`========== [ ▼ every 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        const question1 = names.every((name) => {
          return name.length >= 20;
        })
        
        console.log(question1);

        break;
      }
      // 2번 문제
      case 2: {
        const question2 = names.every((name) => {
          return name.toLowerCase().includes('a');
        })

        console.log(question2);

        break;
      }
      default:
        break;
    }

    console.log("");
  }

  // 정답 출력
  question(index)
}


// find 문제
const question_find = (index) => {
  let namesNewArray = [];

  const question = (index) => {
    console.log(`========== [ ▼ find 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        names.filter((name) => {
          return name.length >= 20 && namesNewArray.push(name);
        })

        break;
      }
      // 2번 문제
      case 2: {
        names.filter((name) => {
          const nameLength = name.split(' ').length;
          return nameLength >= 3 && namesNewArray.push(name);
        })

        break;
      }
      default:
        break;
    }

    console.log(namesNewArray);
    console.log("");
  }

  // 정답 출력
  question(index)
}

// findIndex 문제
const question_findIndex = (index) => {
  let namesIndexArray = [];

  const question = (index) => {
    console.log(`========== [ ▼ findIndex 문제 ${index}번 정답 ▼ ] ==========`);

    switch (index) {
      // 1번 문제
      case 1: {
        const getIndex = () => {
          names.findIndex((name, index) => {
            name.length >= 20 && namesIndexArray.push(index);
          })

          return namesIndexArray;
        };

        getIndex();

        break;
      }
      // 2번 문제
      case 2: {
        const getIndex = () => {
          names.findIndex((name, index) => {
            const nameLength = name.split(' ').length;
            nameLength >= 3 && namesIndexArray.push(index);
          })

          return namesIndexArray;
        }

        getIndex();

        break;
      }
      default:
        break;
    }

    console.log(namesIndexArray);
    console.log("");
  }

  // 정답 출력
  question(index)
}