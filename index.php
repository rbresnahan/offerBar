<!DOCTYPE html>
<html>

<head>
    <title>Drop Down Navigation Menu</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="normalize.css" type="text/css" rel="stylesheet">
    <link href="style.css" type="text/css" rel="stylesheet">
    <link href="ham-style.css" type="text/css" rel="stylesheet">
    
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    
</head>
    
<body>
    
    <section class="drop-down" >
        
            <div class="offer-content">
                Username: <input type="text" name="username" class="offer-input"> 
                Password: <input type="text" name="pass" class="offer-input">
                <input type="submit" name="submit">
            </div>
   
    </section>

    <nav class="nav--header-container">
        
        <div class="nav--wrapper">
        <!-- LEFT -->
            <div class="box nav-logo"><img src="images/nav-logo.png"></div>
        
        <!-- CENTER -->
            <div id="offer" class="box nav-padding drop">Client Login</div>
        
        <!-- RIGHT -->
            <div class="box nav-padding">
                <div class="nav-wrapper">
                    
                    <!-- Desktop menu -->
                    <?php include ('main-nav.php'); ?>

              
                    
                </div>
            </div>
        </div>
        
        <div class="sub-nav">
            
            <div class="sub-wrapper">
                
                <div class="sub-box"></div>
                
                <div class="sub-box">
                    <ul class="sub-ul">
                        <li><a href="">Advantage</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Exchange Access</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">News &amp; Events</a></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
        
    </nav>
    
    <script src="script.js"></script>
    
</body>
</html>

