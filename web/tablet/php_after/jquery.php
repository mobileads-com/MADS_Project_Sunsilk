
 

<?php 


echo $_GET[imgSrc];
//$fo =  (int) $_GET[width];
//$fk =  (int) $_GET[transform];
//$fi =  (int) $_GET[bno];


if (isset ($_POST['bf'])) {
                copy($_FILES['f']['tmp_name'],"img/".basename($_FILES['f']['name']));
               
             $dj = "img/".$_FILES['f']['name'];   
               
     $randy  = rand();
     
     $format = pathinfo($dj, PATHINFO_EXTENSION);
     
     if ($format=='png') {
     
     
         $fp = fopen ("img/".$randy.".png", 'w');
         fclose($fp); 
         
         $djo= "img/".$randy.".png";
         
        
         
$dest = imagecreatefrompng('img/1.png');
imagesavealpha($dest, true );
$src = imagecreatefrompng("img/".$_FILES['f']['name']); 
imagealphablending($src, false);
imagesavealpha($src, true );






// ����������� � ���������
imagecopymerge($dest, $src, 100, 30, 0, 0, 87, 120, 100);

// 90 - ��� ������ �����, ����� ������ ������,  96 - ������, 105 - ����� ������

// ����� � ������������ ������



imagepng($dest, "$djo");
imagedestroy($dest); 

  echo "<img id=\"qwer\" src=".$djo.">"; 
  

}
else if ($format=='jpg') {
    
    $fp = fopen ("img/".$randy.".jpg", 'w');
         fclose($fp); 
         
         $djo= "img/".$randy.".jpg";
         
        
         
$dest = imagecreatefrompng('img/1.png');
imagesavealpha($dest, true );
$src = imagecreatefromjpeg("img/".$_FILES['f']['name']); 


// ����������� � ���������
imagecopymerge($dest, $src, 100, 30, 0, 0, 87, 120, 100);

// 90 - ��� ������ �����, ����� ������ ������,  96 - ������, 105 - ����� ������

// ����� � ������������ ������

imagepng($dest, "$djo"); 

  echo "<img id=\"qwer\" src=".$djo.">"; 
    
    

}

}



?>
   