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
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<?php echo $root; ?>js/scripts.js"></script>
	<script src="http://localhost/lib/js/live.js"></script>
	<title><?php echo $title; ?></title>
</head>
<body>
	<header>
		<h1></h1>
		
		<nav>
			<ul>
				<li><a href="<?php echo $root; ?>"></a></li>
			</ul>
		</nav>
	</header>
