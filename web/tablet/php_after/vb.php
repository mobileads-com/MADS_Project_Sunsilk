<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<style>
	.div1, .div2, .div3{
		height: 480px;
		width: 320px;
		border: 1px #000 solid;
		position: relative;
	}
	.work_place, .result{
		width: 298px;
		height: 224px;
		border: 2px #f00 solid;
		position: relative;
		left: 50%;
		margin-left: -151px;
	}
	.div2 button{
    	margin-top: 20px;
	}
	#layer11{
		position: absolute;
		z-index: 1;
	}
	.work_place p{
		margin-top: 0;
	}
</style>
<body>
      

		<div>
			<!-- шаг 1 -->
			<div class="div2">
				<div class="work_place">
					<p>
                    
                     <script src="http://yandex.st/jquery/2.1.0/jquery.min.js" type="text/javascript"></script>
<script language="javascript">
                     $('.carousel-block').click(function(){                                   
                var images = $(this).find('img');
                var imgSrc = images.attr('src');
             
                $('#work_place').attr({ src: imgSrc });      

                $('.thumb').removeClass('border_grin');                       
                images.addClass('border_grin');                                
                return false;
              });
              </script>
              
             			<img  src="img/1.png" > <!--src это картинки будет менятся  !!!!!!!!!!!!!!!--> 
	            	</p>
	            	<div id="canv_work" class="canv_work">
		              	<div id="img_move">
                        
		              		<img id="q" src="img/2.png" style=" position: absolute; z-index: 0; width: 100px; left: 84px; top: 11px; " id="iqwe">
		              	</div>
		           	</div>
				</div>
                <form enctype="multipart/form-data" method="post">
   <p><input type="file" name="f" multiple accept="image/*,image/png">
   <input type="submit" name="bf" "value="Отправить"></p>
   </form> 
				<!-- Вместо тега button может быть что угодно, лижбы работало.  -->
	
   
  

 

                
         
         <script src="http://yandex.st/jquery/2.1.0/jquery.min.js" type="text/javascript"></script>
<script language="javascript">
var width = $('#q').css('width');
var transform = $('#q').css('transform');
var bno = $('#q').css('top');
var left = $('#q').css('left');

$.get('jquery.php', {transform:transform, bno:bno, width:width, left:left}, function(data) {

});

$('.carousel-block').click(function(){                                   
                var images = $(this).find('img');
                var imgSrc = images.attr('src');
              
                
                $.get('jquery.php', {imgSrc:imgSrc}, function(data) {
                    alert(data);

});                             
                return false;
              });
</script>
   

   
   
  


  
   
 
   
                
                 <!-- При нажатии склеить 2 фото и сохранить в папку--> 
			</div>	
			<!-- шаг 2 -->
               
			<div class="div3">
				<div class="result">
                
           
             
      
    
   
    
    <?php
  include 'jquery.php';
  ?>

  
  
     
     
      
                 
                
                </div> <!-- Сюда выводить уже готовую картинку из папки -->
			</div>	
		</div>
</body>
</html>