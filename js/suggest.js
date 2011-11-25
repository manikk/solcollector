/*
   Define Rules based on the existing affix files    
*/

var solCollector = {
   suffixRules:{
      "A":[         
        "\u0bcd \u0bc8/AGNnQ \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bc8/NnQ \u0bae\u0bcd",
         "0 \u0ba4\u0bc8/N \u0ba4\u0bcd",
         "0 \u0bb2\u0bcd\u0bb2\u0bc8 \u0bb2\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bc8 \u0bbe\u0bb2\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bc8 \u0b9f\u0bb2\u0bcd",
         "0 \u0baf\u0bc8/N \u0bc8",
         "0 \u0baf\u0bc8/N \u0bbf",
         "0 \u0bb5\u0bc8/N \u0bbe",
         "0 \u0bb5\u0bc8/T \u0ba4\u0bc1",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bc8 \u0b9f\u0bc1",
         "\u0bc1 \u0bc8/Nn \u0bc1"
      ],
      "B":[
         "\u0bcd \u0bbe\u0bb2\u0bcd/NPT \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0bae\u0bcd",
         "0 \u0ba3\u0bbe\u0bb2\u0bcd \u0ba3\u0bcd",
         "0 \u0baf\u0bbe\u0bb2\u0bcd/N \u0bc8",
         "0 \u0baf\u0bbe\u0bb2\u0bcd/N \u0bbf",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bbe\u0bb2\u0bcd \u0b9f\u0bc1",
         "\u0bc1 \u0bbe\u0bb2\u0bcd/NQT \u0bc1"
      ],
      
      "C":[
         "\u0bcd \u0bc1\u0b95\u0bcd\u0b95\u0bc1/imNnQRrSuT \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bcd\u0b95\u0bc1/m \u0bae\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bb2\u0bcd",
         "0 \u0b95\u0bcd\u0b95\u0bc1/NR \u0bbf",
         "0 \u0b95\u0bcd\u0b95\u0bc1/mNn \u0bc8",
         "0 \u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1/NQ \u0bbe",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bc1/Nm \u0b9f\u0bc1",
         "0 \u0b95\u0bcd\u0b95\u0bc1/Nm \u0bc1",
         "\u0ba4\u0bc1 \u0ba4\u0bb1\u0bcd\u0b95\u0bc1/NR \u0ba4\u0bc1"
      ],
      "c":[
         "0 \u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1/N \u0bbe",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1/NR \u0bae\u0bcd"
      ],
      "D":[
         "\u0bcd \u0bbf\u0bb2\u0bcd/iNnPQTUuv \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd/NPUT \u0bae\u0bcd",
         "\u0bae\u0bcd \u0bae\u0bbf\u0bb2\u0bcd/NPU \u0bbe\u0bae\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbf\u0bb2\u0bcd \u0bb2\u0bcd",
         "0 \u0baf\u0bbf\u0bb2\u0bcd/UQ \u0bbf",
         "0 \u0baf\u0bbf\u0bb2\u0bcd/iNQPTUu \u0bc8",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b9f\u0bc1",
         "\u0baa\u0bc1 \u0baa\u0bcd\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bc1",
         "\u0baa\u0bc1 \u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bcd\u0baa\u0bc1",
         "\u0bb1\u0bc1 \u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd \u0bb1\u0bc1",
         "0 \u0bb5\u0bbf\u0bb2\u0bcd \u0bb4\u0bc1",
         "0 \u0bb5\u0bbf\u0bb2\u0bcd \u0bb0\u0bc1",
         "\u0bc1 \u0bbf\u0bb2\u0bcd/NU \u0bc1",
         "0 \u0bb5\u0bbf\u0bb2\u0bcd/NU \u0bbe"
      ],
      "E":[
         "\u0bcd \u0ba4\u0bc1/Q \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0ba4\u0bc1 \u0bae\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbf\u0ba9\u0ba4\u0bc1 \u0bb2\u0bcd",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bbf\u0ba9\u0ba4\u0bc1 \u0b9f\u0bc1",
         "0 \u0baf\u0ba4\u0bc1 \u0bbf",
         "0 \u0baf\u0ba4\u0bc1 \u0ba4\u0bc8",
         "0 \u0bb5\u0ba4\u0bc1 \u0bbe",
         "0 \u0bb5\u0ba4\u0bc1 \u0bc1"
      ],
      "F":[
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd\u0b95\u0ba3\u0bcd \u0b9f\u0bc1",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd\u0b95\u0ba3\u0bcd \u0bae\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbf\u0ba9\u0bcd\u0b95\u0ba3\u0bcd \u0bb2\u0bcd",
         "0 \u0baf\u0bbf\u0ba9\u0bcd\u0b95\u0ba3\u0bcd \u0ba4\u0bc8",
         "\u0bb3\u0bcd \u0bb3\u0bbf\u0ba9\u0bcd\u0b95\u0ba3\u0bcd \u0bb3\u0bcd"
      ],
      "f":[
         "\u0bcd \u0bbf\u0b9f\u0bae\u0bcd/DiNQUu \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bae\u0bcd/DNQUu \u0bae\u0bcd",
         "0 \u0bb5\u0bbf\u0b9f\u0bae\u0bcd \u0bbe",
         "0 \u0baf\u0bbf\u0b9f\u0bae\u0bcd \u0bc8",
         "0 \u0baf\u0bbf\u0b9f\u0bae\u0bcd \u0bbf"
      ],
      "G":[
         "\u0bcd \u0bbe/E \u0bcd",
         "\u0bc1 \u0bbe \u0bc1",
         "0 \u0baf\u0bbe \u0bc8",
         "0 \u0baf\u0bbe \u0bbf",
         "0 \u0bb5\u0bbe \u0bbe"
      ],
      "H":[
          "\u0bcd \u0bbf\u0ba9\u0bcd/ABCDm \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd/AB \u0bae\u0bcd",
         "0 \u0ba4\u0bbf\u0ba9\u0bcd/B \u0ba4\u0bcd",
         "0 \u0bb2\u0bbf\u0ba9\u0bcd \u0bb2\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbf\u0ba9\u0bcd \u0bbe\u0bb2\u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbf\u0ba9\u0bcd \u0b9f\u0bb2\u0bcd",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0b9f\u0bc1",
         "\u0b9f\u0bc1 \u0b9f\u0bbf\u0ba9\u0bcd \u0b9f\u0bcd\u0b9f\u0bc1",
         "\u0bb1\u0bc1 \u0bb1\u0bcd\u0bb1\u0bbf\u0ba9\u0bcd \u0bb1\u0bc1",
         "0 \u0bb5\u0bbf\u0ba9\u0bcd \u0bb4\u0bc1",
         "\u0b95\u0bc1 \u0b95\u0bbf\u0ba9\u0bcd/AN \u0b95\u0bc1",
         "0 \u0baf\u0bbf\u0ba9\u0bcd \u0bbf",
         "0 \u0baf\u0bbf\u0ba9\u0bcd/B \u0bc8",
         "0 \u0bb5\u0bbf\u0ba9\u0bcd \u0bbe",
         "\u0bc1 \u0bbf\u0ba9\u0bcd/ABm \u0bc1"
      ],
      "I":[
         "\u0bcd \u0bc1\u0b9f\u0bc8\u0baf \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bc1\u0b9f\u0bc8\u0baf \u0bae\u0bcd",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bc1\u0b9f\u0bc8\u0baf \u0b9f\u0bc1",
         "0 \u0b9f\u0bc8\u0baf \u0bc1",
         "0 \u0baf\u0bc1\u0b9f\u0bc8\u0baf \u0bc8"
      ],
      "i":[
         "\u0bcd \u0bc1\u0bb3\u0bcd\u0bb3 \u0bcd",
         "0 \u0baf\u0bc1\u0bb3\u0bcd\u0bb3 \u0bb1\u0bc8",
         "0 \u0baf\u0bc1\u0bb3\u0bcd\u0bb3 \u0b95\u0bc7",
         "0 \u0bb3\u0bcd\u0bb3 \u0bc1"
      ],
      "J":[
         "\u0bcd \u0bc1\u0b9f\u0ba9\u0bcd/QS \u0bcd",
         "\u0bae\u0bcd \u0bb2\u0bc1\u0b9f\u0ba9\u0bcd/S \u0bb2\u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bc1\u0b9f\u0ba9\u0bcd/S \u0bae\u0bcd",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bc1\u0b9f\u0ba9\u0bcd \u0b9f\u0bc1",
         "0 \u0baf\u0bc1\u0b9f\u0ba9\u0bcd/S \u0bc8",
         "0 \u0baf\u0bc1\u0b9f\u0ba9\u0bcd/N \u0bbf",
         "0 \u0bb5\u0bc1\u0b9f\u0ba9\u0bcd \u0bbe",
         "0 \u0b9f\u0ba9\u0bcd/N \u0bc1"
      ],
      "j":[
         "\u0bcd \u0bcb\u0b9f\u0bc1/N \u0bcd",
         "\u0bae\u0bcd \u0ba4\u0bcd\u0ba4\u0bcb\u0b9f\u0bc1 \u0bae\u0bcd",
         "\u0b9f\u0bc1 \u0b9f\u0bcd\u0b9f\u0bcb\u0b9f\u0bc1 \u0b9f\u0bc1",
         "0 \u0bcb\u0b9f\u0bc1 \u0bc1",
         "0 \u0baf\u0bcb\u0b9f\u0bc1 \u0bbf",
         "0 \u0baf\u0bcb\u0b9f\u0bc1/N \u0bc8"
      ],
      "M":[
         "\u0bb2\u0bcd \u0bb1\u0bcd\u0b95\u0bb3\u0bcd/ABCDEFGHIJKL \u0bb2\u0bcd",
         "\u0bae\u0bcd \u0b99\u0bcd\u0b95\u0bb3\u0bcd/ABCDEFGHIJKL \u0bae\u0bcd",
         "0 \u0b95\u0bb3\u0bcd/ABCDEFGHIJKL \u0bc1",
         "0 \u0b95\u0bb3\u0bcd/ABCDEFfGHIJjKLRTS \u0bbf",
         "0 \u0b95\u0bb3\u0bcd \u0bcd",
         "0 \u0b95\u0bb3\u0bcd/ABCDEFGHIJjKLN \u0bc8",
         "0 \u0b95\u0bcd\u0b95\u0bb3\u0bcd/ABCDEFGHIJKL \u0bbe"
      ],
      "m":[
         "\u0bcd \u0bc1\u0bb3\u0bcd \u0bcd",
         "0 \u0bb3\u0bcd \u0b95\u0bc1"
      ],
      "N":[
        "\u0bcd \u0bc1\u0bae\u0bcd/r \u0bcd",
         "0 \u0bae\u0bcd/AQ \u0bc1",
         "0 \u0baf\u0bc1\u0bae\u0bcd/S \u0bbf",
         "0 \u0baf\u0bc1\u0bae\u0bcd \u0bc8",
         "0 \u0bb5\u0bc1\u0bae\u0bcd \u0bbe",
         "0 \u0baf\u0bc1\u0bae\u0bcd \u0b95\u0bc7",
         "0 \u0bb5\u0bc1\u0bae\u0bcd \u0b95" 
      ],
      "n":[
         "\u0bcd \u0bcb \u0bcd",
         "0 \u0baf\u0bcb \u0bc8",
         "0 \u0baf\u0bcb \u0bbf",
         "0 \u0bb5\u0bcb \u0bbe",
         "\u0bb3\u0bcd \u0bb3\u0bcb \u0bb3\u0bcd",
         "0 \u0bb5\u0bcb \u0b95",
         "\u0bc1 \u0bcb/T \u0bc1"
      ],
      "O":[
         "\u0bb4\u0bcd \u0bb4\u0bc7 \u0bb4\u0bcd"
      ],
      "o":[
         "0 \u0baf\u0bbe\u0bae\u0bcd \u0bc8",
         "0 \u0baf\u0bbe\u0bae\u0bcd \u0bbf"
      ],
      "P":[
         "\u0bb2\u0bcd \u0bb2\u0bc7\u0baf\u0bc7 \u0bb2\u0bcd"
      ],
      "Q":[
         "\u0bcd \u0bc7/TQ \u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bc7 \u0bb2\u0bcd",
         "0 \u0baf\u0bc7/T \u0bbf",
         "0 \u0baf\u0bc7/T \u0bc8",
         "0 \u0bb5\u0bc7 \u0bbe",
         "0 \u0bb5\u0bc7 \u0b95",
         "0 \u0baf\u0bc7/T \u0b95\u0bc7",
         "0 \u0baf\u0bc7 \u0bc7",
         "\u0bc1 \u0bc7 \u0bc1",
         "0 \u0bb5\u0bc7 \u0bae\u0bbe"
      ],
      "R":[
         "\u0bcd \u0bbe\u0b95/NnQT \u0bcd",
         "\u0bb2\u0bcd \u0bb2\u0bbe\u0b95/N \u0bb2\u0bcd",
         "0 \u0baf\u0bbe\u0b95 \u0bbf",
         "0 \u0baf\u0bbe\u0b95/GNnQ \u0bc8",
         "0 \u0bb5\u0bbe\u0b95 \u0bbe",
         "\u0bc1 \u0bbe\u0b95 \u0bc1"
      ],
      "r":[
         "\u0bcd \u0bbe\u0baf\u0bcd \u0bcd",
         "0 \u0baf\u0bbe\u0baf\u0bcd \u0bbf",
         "0 \u0baf\u0bbe\u0baf\u0bcd \u0bc8",
         "\u0bc1 \u0bbe\u0baf\u0bcd \u0bc1"
      ],
      "S":[
         "\u0bcd \u0bbe\u0ba9 \u0bcd",
         "\u0bc1 \u0bbe\u0ba9 \u0bc1",
         "0 \u0baf\u0bbe\u0ba9 \u0bbf",
         "0 \u0baf\u0bbe\u0ba9 \u0bc8",
         "\u0b95\u0bc1 \u0b95\u0bbe\u0ba9 \u0b95\u0bc1"
      ],
      "T":[
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/GQ \u0bcd",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/GQ \u0bc1",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/GQ \u0bbf",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/GQ \u0bbe",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/Q \u0bc7",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd/GQ \u0bc8",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd \u0baf\u0bc7",
         "0 \u0ba4\u0bbe\u0ba9\u0bcd \u0bb3\u0bc7",
         "0 \u0ba4\u0bcd\u0ba4\u0bbe\u0ba9\u0bcd \u0bbe\u0b95"
      ],
      "t":[
         "\u0bcd \u0bbe\u0b95\u0bc1\u0bae\u0bcd \u0bcd",
         "0 \u0baf\u0bbe\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bbf",
         "0 \u0baf\u0bbe\u0b95\u0bc1\u0bae\u0bcd \u0bc8",
         "\u0bc1 \u0bbe\u0b95\u0bc1\u0bae\u0bcd \u0bc1"
      ],
      "U":[
         "\u0bcd \u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1/Q \u0bcd",
         "0 \u0baf\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bc7"
      ],
      "u":[
         "\u0bcd \u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4 \u0bcd",
         "0 \u0baf\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4 \u0b95\u0bc7",
         "\u0b95\u0bc1 \u0b95\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4 \u0b95\u0bc1"
      ],
      "V":[
         "0 \u0baf\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0bb1\u0bc8"
      ],
      "v":[
         "0 \u0baf\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8 \u0bb1\u0bc8",
         "0 \u0baf\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8 \u0bb5\u0bc7",
         "\u0bae\u0bcd \u0bae\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8 \u0bae\u0bcd",
         "0 \u0bb2\u0bcd\u0bb2\u0bc8 \u0bcd",
         "0 \u0bbf\u0bb2\u0bcd\u0bb2\u0bc8 \u0bc1"
      ]     
      
   },
   getWords: function(word) {           
      var returnArray = [];
      var originalWord = word;
      for(var i in this.suffixRules){
         word = originalWord;
          var rule = this.suffixRules[i];
         if(rule.length>0) {           
            for(var j=0;j<rule.length;j++){
               var ruleArray = rule[j].split(" ");
               var lettersToRemove = ruleArray[0];
               var lettersEndMatch = ruleArray[2];    
               var lettersToAdd = ruleArray[1].split("/")[0];        
               
               if( word.substr(word.length-lettersEndMatch.length,word.length) == lettersEndMatch) {
                  if(lettersToRemove!=0) {                     
                     //returnArray.push(word.substring(0,word.length-lettersToAdd.length)+lettersToAdd);
                     returnArray.push({'rule':i,'word':word.substr(0,word.length-lettersToRemove.length)+lettersToAdd});
                  }else {             
                    returnArray.push({'rule':i,'word':word+lettersToAdd});
                  }
                  break;
               }
            }
         }
      }
      
      return returnArray;
   }      
};




