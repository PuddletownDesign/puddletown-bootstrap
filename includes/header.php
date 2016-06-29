<?php include 'root.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if (isset($description)): ?>
	<meta name="description" content="<?php echo $description; ?>">
<?php endif; ?>
	<link href="<?php echo $root; ?>css/styles.css" rel="stylesheet">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<?php echo $root; ?>js/scripts.js"></script>
	<script src="http://localhost/lib/js/live.js"></script>
	<title><?php echo $title; ?></title>
</head>
<body>
	<div class="wrapper">
	<header>
<?php if (isset($home)): ?>
		<h1 class="logo"><img src="<?php echo $root; ?>images/logo.png" alt=""></h1>

<?php else: ?>
		<a class="logo" href="<?php echo $root; ?>"><img src="<?php echo $root; ?>images/logo.png" alt=""></a>
<?php endif; ?>
		
		<nav role="navigation">
			<ul>
				<li><a href="<?php echo $root; ?>contact">Contact</a></li>
			</ul>
		</nav>
	</header>
