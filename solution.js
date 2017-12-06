const csvFilePath='data/comma.txt'
const csvFilePathpipe='data/pipe.txt'
const csvFilePathdollar='data/dollar.txt'

const csv=require('csvtojson')

var allArrayed=new Array();
 
const commaArray = new Array();
const pipeArray = new Array();
const dollarArray = new Array();

csv({noheader : true})
.fromFile(csvFilePath)
.on('csv',(csvRow, rowIndex) => {
    //csvRow=> [cell1, cell2, cell3]
    //rowIndex=> number
	//console.log(csvRow);
	for(var i = 0; i < csvRow.length - 1; i++)
	{ 
       var obj = new Object();
	   obj.last_name = csvRow[i].trim();
	   i++;
	   if ((i) < csvRow.length) { 
		   obj.first_name = csvRow[i].trim(); 
	   } else {
		  obj.first_name = '';
	   }
	   i++;

	   if ((i) < csvRow.length) { 
		   obj.campus = csvRow[i].trim();
		} else {
			obj.campus = '';
	  }
	  i++;
	  if ((i) < csvRow.length) {
		  obj.favorite_color = csvRow[i].trim();
		} else {
			obj.favorite_color = '';
		}
		i++;
		if ((i) < csvRow.length) {
			obj.date_of_birth =  csvRow[i].trim();
		} else {
			obj.date_of_birth =  '';
		}
		i++;
		commaArray.push(obj);
	}
})

.on('done',(error) => {
	  allArrayed = allArrayed.concat(commaArray);
	//console.log.apply(null, commaArray);
    //console.log('end')
});

csv({noheader:true})
.fromFile(csvFilePathpipe)
.on('csv',(csvRow, rowIndex)=>{
	for(var i = 0; i < csvRow.length; i++) {
		var processData = csvRow.join(',').split('|');
 	    var j=0;
		var obj = new Object();
		obj.last_name = processData[j].trim();
		j++;
	    obj.first_name = (j < processData.length) ? processData[j].trim() : '';  
	    j++;
	    obj.middle_initial = (j < processData.length )? processData[j].trim() : '';  
	    j++;
	    obj.campus = (j < processData.length) ? processData[j].trim() : '';  
	    j++;
	    obj.favorite_color = (j < processData.length) ? processData[j].trim() : ''; 
	    j++;
	    obj.date_of_birth = ( j < processData.length) ? processData[j].trim() : '';
	    pipeArray.push(obj);   
	}
})

.on('done',(error)=>{
		  allArrayed=allArrayed.concat(pipeArray);
		// console.log.apply(null, pipeArray);
    //console.log('end')
});

csv({noheader:true})
.fromFile(csvFilePathdollar)
.on('csv',(csvRow, rowIndex)=>{
     
	   var processData = csvRow.join(',').split('$');
       var j = 0;
	   var obj = new Object();
	   obj.last_name = processData[j].trim();
	   j++;
	   obj.first_name= ( j < processData.length) ? processData[j].trim() : '';  
	   j++;
	   obj.middle_initial =(j < processData.length) ? processData[j].trim() : '';  
	   j++;
	   obj.campus = ( j < processData.length) ? processData[j].trim() : '';  
	   j++;
	   obj.date_of_birth = (j < processData.length) ? processData[j].trim() : '';
	   j++;
	   obj.favorite_color = (j < processData.length) ? processData[j].trim() : ''; 
	   dollarArray.push(obj);    
})

.on('done',(error) => {
	 allArrayed=allArrayed.concat(dollarArray);
	 //console.log.apply(null, dollarArray);
    sortArray();
});

function sortArray() {
	  // console.log.apply(null, dollarArray);
	  //Sorting
	  console.log("\nOutput1:");
	  allArrayed.sort(function(a, b){
		  return a.campus > b.campus  &  a.last_name > b.last_name;
	});
 
	for(var p = 0; p < allArrayed.length; p++) {
		var obj = allArrayed[p];
		console.log(obj.last_name + ' ' + obj.first_name + ' ' + obj.campus + ' ' + obj.date_of_birth + ' ' + obj.favorite_color );  
	}
	console.log("\nOutput2");

	allArrayed.sort(function(a, b) {
		  var key1 = new Date(a.date_of_birth);
		  var key2 = new Date(b.date_of_birth);
		  return key1 > key2;
		});
		
		for(var p = 0; p < allArrayed.length; p++) {
			var obj = allArrayed[p];
			console.log(obj.last_name + ' ' + obj.first_name + ' ' + obj.campus + ' ' + obj.date_of_birth + ' ' + obj.favorite_color );  
		}
		console.log("\nOutput3");
		allArrayed.sort(function(a, b) {
			return a.last_name < b.last_name;
		});
		for(var p = 0; p < allArrayed.length; p++) {
			var obj = allArrayed[p];
			console.log(obj.last_name +  ' ' + obj.first_name + ' ' + obj.campus + ' ' + obj.date_of_birth + ' ' + obj.favorite_color );  
		}
	}
 

  