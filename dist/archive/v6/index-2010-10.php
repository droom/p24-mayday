<?php $thisPage="Home"; ?>
<?php include("includes/head.php"); ?>

<body>
	<hr id="tophr" />
	<div id="colWrap">
		<?php include("includes/nav.php"); ?>
		
		<div id="main">
			<?php include("includes/badge.php"); ?>

			<div class="indexStrap">
				<h2>October</h2>
			</div>
			<div id="colHero">
				<script language="javascript"> 
					if (AC_FL_RunContent == 0) {
						alert("This page requires AC_RunActiveContent.js.");
					} else {
						AC_FL_RunContent(
							'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0',
							'width', '800',
							'height', '342',
							'src', 'swf/editions/797x334',
							'quality', 'high',
							'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
							'align', 'middle',
							'play', 'true',
							'loop', 'true',
							'scale', 'showall',
							'wmode', 'transparent',
							'devicefont', 'false',
							'id', 'swf/editions/797x334',
							'bgcolor', '#cfd185',
							'name', 'swf/editions/797x334',
							'menu', 'true',
							'allowFullScreen', 'false',
							'allowScriptAccess','sameDomain',
							'movie', 'swf/editions/797x334',
							'salign', ''
			); //end AC code
					}
				</script> 
				<noscript> 
					<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="800" height="342" id="swf/editions/797x334" align="middle"> 
						<param name="allowScriptAccess" value="sameDomain" /> 
						<param name="allowFullScreen" value="false" /> 
						<param name="movie" value="swf/editions/797x334.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="bgcolor" value="#cfd185" />	<embed src="swf/editions/797x334.swf" quality="high" wmode="transparent" bgcolor="#cfd185" width="800" height="342" name="swf/editions/797x334" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /> 
					</object> 
				</noscript> 
			</div>
			<?php include("includes/blurb.php"); ?>

			<div id="colRightIndex"> 
				<p class="archive">
					/<a href="index.php">November</a>
					/October 
					/<a href="index-2010-09.php">September</a> 
					/<a href="index-2010-08.php">August</a> 
					/<a href="index-2010-07.php">July</a>
					/<a href="index-2010-06.php">June</a>
				</p>
				<p class="small grey">If you can't see the above sequence, you may need to update your <a href="http://www.adobe.com/products/flashplayer/" target="_blank">Adobe® Flash® player</a>.</p>
			</div>
			
			
			<?php include("includes/footer.php"); ?>
		</div>
	</div>
</body>
</html>
