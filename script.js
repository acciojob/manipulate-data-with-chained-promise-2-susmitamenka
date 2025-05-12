function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function transformArray() {
      return new Promise((resolve) => {
        const arr = [1, 2, 3, 4];

        // Initial delay of 3 seconds
        setTimeout(() => {
          resolve(arr);
        }, 3000);
      })
      .then((arr) => {
        // Filter out odd numbers
        const evenNumbers = arr.filter(num => num % 2 === 0);
        return delay(1000).then(() => {
          document.getElementById('output').innerText = `Even numbers: ${evenNumbers}`;
          return evenNumbers;
        });
      })
      .then((evenNumbers) => {
        // Multiply even numbers by 2
        const doubled = evenNumbers.map(num => num * 2);
        return delay(2000).then(() => {
          document.getElementById('output').innerText = `Doubled numbers: ${doubled}`;
        });
      });
    }

    window.onload = function() {
      transformArray();
    };