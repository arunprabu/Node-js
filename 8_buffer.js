var dummyTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan leo non libero mollis, eget vulputate ipsum ultricies. Duis a scelerisque mauris, viverra efficitur ligula. Proin euismod ipsum id erat consequat viverra. Vestibulum ut tempus erat. Nulla porttitor dui lorem, vel tincidunt ligula pharetra ac. Phasellus et erat sodales, volutpat orci id, viverra quam. Maecenas molestie at eros eu maximus. Proin velit est, pellentesque at condimentum porta, feugiat a ex. Vivamus id commodo tortor, suscipit sagittis ligula. Phasellus interdum feugiat tortor a euismod. Nam tincidunt turpis accumsan gravida sodales. Sed mollis aliquet leo condimentum volutpat. Donecin felis vel magna suscipit molestie in eget ipsum.";

var buf = new Buffer( dummyTxt, 'utf8');
console.log(buf); //prints dummyTxt value in utf8
console.log(buf.toString()); // prints dummyTxt value in string
console.log(buf.toJSON()); // shows type and also data in unicode
console.log("===========================");
console.log(buf[4]);

buf.write('Placeholder'); // replace first 11 chars in buf
console.log(buf.toString());