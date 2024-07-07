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
          // 이름을 띄어쓰기 기준으로 배열을 만든 다음 첫번째 값(=이름)만 가져옴
          const getName = name.split(" ")[0];
          return namesNewArray.push(getName);
        })

        break;
      }
      // 3번 문제
      case 3: {
        names.map((name) => {
          const getNameInitial = () =>{
            let initialArray = []; // 이니셜을 담을 배열
            let nameArray = name.split(" "); // 이름을 띄어쓰기 기준으로 배열 만듦
            
            
            nameArray.map((arr) => {
              // 이름으로 만든 배열 값의 첫번째 글자만 가져옴
              return initialArray.push(arr.slice(0, 1));
            })

            // 이니셜 한글자씩 따로따로 저장된 배열을 이름별로 묶어줌
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
          // 공백을 제거한 이름 알파벳 한글자씩 배열로 만듦
          let nameAlphabets = [...name.replace(/\s/g, "")];

          for(let i = 0; i < nameAlphabets.length; i++){
            // 현재 알파벳과 이전의 알파벳이 같고(연속된 글자)
            // 새로운 배열에 이미 있는 값이 아닐 때(중복된 값 방지)
            // 새로운 빈 배열값에 넣어준다
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
          // 이름을 띄어쓰기 기준으로 배열로 만든다음 첫번째 값(=이름)만 가져옴
          const getName = name.split(" ")[0];

          // 대소문자 구분 없이 값을 비교하기 위해 배열을 전부 소문자로 변환해준 다음 비교
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
          // 대소문자 구분 없이 'a'가 들어간 값을 찾기 위해 데이터를 소문자로 변환 후 비교
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
          // 공백 기준으로 이름 데이터를 나눠서 배열에 넣은 다음, 길이가 3 이상(=middle name이 있는 경우)인 데이터만 반환
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
        // 글자수가 20자 이상인 모든 값의 인덱스를 반환
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
        // middle name이 있는 모든 값의 인덱스를 반환
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