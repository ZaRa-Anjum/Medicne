var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
 camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
  console.log('ml5', ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jzPYYaK9v/model.json',modelLoaded);

  function modelLoaded() {
      console.log('Model Loaded');
  }
   function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Prediciton is"+ prediction_1;
    speak_data_2 = "And the decond prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
   }
   function check(){
       img= document.getElementById('captured_image');
       classifier.classify(img, gotResult);
   }
   function gotResult(error, results){
       if (error) {
           console.error(error);
       } else {
           console.log(results);
           
           document.getElementById("result_medicine_name2"),innerHTML= results[1].label;
           prediction_1 = results[0].label;
           prediction_2 = results[1].label;
           speak();
           if(results[0].label == "Dolo 650")
           {
               document.getElementById("update_medicine1").innerHTML = "Dolo 650 💊";

           }
           if(results[0].label == "Pan 40")
           {
               document.getElementById("update_medicine1").innerHTML = "Pan 40 💊";
           }
           if(results[0].label == "Paracetamol")
           {
               document.getElementById("update_medicine1").innerHTML = "Paracetamol 💊";
           }
           if(results[0].label == "Iboprofen")
           {
               document.getElementById("update_medicine1").innerHTML = "Iboprofen 💊";
           }


           if(results[1].label == "Dolo 650")
           {
               document.getElementById("update_medicine2").innerHTML = "Dolo 650 💊";

           }
           if(results[1].label == "Pan 40")
           {
               document.getElementById("update_medicine2").innerHTML = "Pan 40 💊";
           }
           if(results[1].label == "Paracetamol")
           {
               document.getElementById("update_medicine2").innerHTML = "Paracetamol 💊";
           }
           if(results[1].label == "Iboprofen")
           {
               document.getElementById("update_medicine2").innerHTML = "Iboprofen 💊";
           }

        }

       
   }