const multiplying2Numbers = (n1, n2) => {
    let res;
    res = n1 * n2;
    let string = "Hola mundo";
    string.replace()
  };

  multiplying2Numbers(5,2);

  let multiply = (a, b) => a * b;



  // Reemplazar los puntos por los guiones en un string
  var replaceDots = function(str) {
    // added the \ to escape special characters
    // added the g so that replace is run for all occurences in the string
      return str.replace(/\./g, '-');
    }

    replaceDots('Hello . World');

    var max = (list) => {
        list.sort((b,a) => {
            return a-b;
        });
        return list[0]
    }

    var min = (list) => {
        list.sort((a,b) => {
            return a-b;
        });
        return list[0];
    }