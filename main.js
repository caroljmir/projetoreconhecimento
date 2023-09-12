Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach("camera");

//<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>

function capturarimagem()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/hZmUCfqBz/model.json', modelLoaded);

function identificarimagem(){
 {
    img = document.getElementById('imagem_capturada');
    classifier.classify(img, gotResult);
  }

}
function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("membro").innerHTML = results[0].label;
    document.getElementById("precisão").innerHTML = results[0].confidence.toFixed(3);
  }
}

