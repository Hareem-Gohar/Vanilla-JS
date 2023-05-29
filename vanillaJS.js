let selectedVal = null;
      let selectedInd = null;
      let tableRecord = [1, 4,8, 1,76,99, 5, 22, 1, 4, 99, 100, 0];

      // /render values in table data

      const renderMyData = (newTableRecord) => {
        tableRow.innerHTML = " ";
        if (newTableRecord) {
          newTableRecord.forEach((val, ind) => {
            tableRow.innerHTML += `<td onclick="selectionFunc(event)" id="${ind}">${val}</td>`;
          });
        } else {
          tableRecord.forEach((val, ind) => {
            tableRow.innerHTML += `<td onclick="selectionFunc(event)" id="${ind}">${val}</td>`;
          });
        }
      };
      renderMyData();

      // Select values and shows its index and values

      let selectionFunc = (e) => {
        selectedVal = e.target.innerText;
        selectedInd = e.target.id;
        selectedData.innerText = `${selectedVal} is selected and ${selectedInd} is its index.`;
      };

      // Deleted sElected item

      const deltFunc = () => {
        const newTableRecord = tableRecord.filter(
          (item) => item != selectedVal
        );
        renderMyData(newTableRecord);
      };

      // Add New Value in Table

      let addDataFunc = () => {
        let newNumber = prompt("Enter a Value.");
        if (isNaN(newNumber)) {
          newNumber += prompt("you have entered wrong value");
        } else {
          tableRecord.push(newNumber);
          renderMyData();
        }
      };

      // Acsending and Decsending Order
      const sortArray = (e) => {
        console.log("e--------->", e);
        if (e.target.value === "asc") {
          tableRecord.sort((a, b) => a - b);
        } else if (e.target.value === "dsc") {
          tableRecord.sort((a, b) => b - a);
        }
        renderMyData();
      };

      // Even and Odd

      let evenFunc = (e) => {
        tableRecord.forEach((item, index) => {
          if (item % 2 == 0) {
            console.log(item);
            document.getElementById(index).style.backgroundColor = "blueviolet";
          }
        });
      };
      
      let oddFunc = (e) => {
        tableRecord.forEach((item, index) => {
          if (item % 2 != 0) {
            console.log(item);
            document.getElementById(index).style.backgroundColor = "pink";
          }
        });
      };
       const moveLeft = () => {
           if (selectedVal == null || selectedVal == "") {
               alert("Select any value you want to move")
           }
           else if (selectedVal === tableRecord[0]){
               alert("can't move now")
           }
           else {
               let prevValue = tableRecord[selectedInd - 1];
               tableRecord[selectedInd - 1] = selectedVal; 
               tableRecord[selectedInd] = prevValue;
               selectedInd = selectedInd - 1;

           }
           renderMyData();
       }
            let moveRight = () => {
                if (selectedVal == null || selectedVal == "") {
                    alert("Select value.")
                }
                else if (selectedInd === tableRecord.length - 1) {
                    alert("Can't move anymore")
                }
                else {
                    let nextValue = tableRecord[parseInt(selectedInd) + 1];
                    tableRecord[parseInt(selectedInd) + 1] = selectedVal;
                    tableRecord[parseInt(selectedInd)] = nextValue;
                    selectedInd = parseInt(selectedInd) + 1;
                    renderMyData();
                }
            }