<?php include('_partials/header.php'); ?>

<?php include('components/nav.php'); ?>

    <?php
        $page = $_GET['page'];
        if ($page == null) {
            $page = 'home';
        }

        include('components/' . $page . '.php');
    ?>
</body>
</html>