<!--	
    Made by Chris Droom / Portfolio 2010
    http://www.chrisdroom.com
    This markup has been doted on, please don't use it without asking. 
    Try turning off the CSS. It should still be semantically correct.
  -->

  <div id="topBar">

    <div id="infoContact">
      <img src="img/assets/brand/madeby.svg" alt="Made by Chris Droom"/>
      <!-- <h1 class="GillSansMT uppercase">Made <span class="DidotLTStdItalic lowercase">by</span> Chris Droom</h1> -->
      <p>
        <a href="mailto:heychris@chrisdroom.com">
          heychris@chrisdroom.com
        </a>
        <br />+44 (0)7951 288 181
      </p>

    </div><!-- /infoContact -->
    
    <div id="naviMenu">
      <ul id="nav" class="menu">
        <li <?php if ($thisPage=="Home") 
        echo " class=\"active\""; ?>><a href="index.php"><span class="menuNum"><span class="menuReduce">0</span>1.</span>Home</a></li>
        <li <?php if ($thisPage=="Work") 
        echo " class=\"active\""; ?>><a href="work.php"><span class="menuNum"><span class="menuReduce">0</span>2.</span>Work</a></li>
        <li <?php if ($thisPage=="School") 
        echo " class=\"active\""; ?>><a href="school.php"><span class="menuNum"><span class="menuReduce">0</span>3.</span>School</a></li>
        <li <?php if ($thisPage=="About") 
        echo " class=\"active\""; ?>><a href="about.php"><span class="menuNum"><span class="menuReduce">0</span>4.</span>Story</a></li>
        <li <?php if ($thisPage=="Research") 
        echo " class=\"active\""; ?>><span class="menuNum"><span class="menuReduce">0</span>5.</span>R&amp;D</li>
      </ul>
    </div><!-- /naviMenu -->

</div><!-- /topBar -->