<?php
$directory = "../../plans/";
$jsonExtention = ".json";
$result = new stdClass();
$result->success = false;
if (isset($_POST["write"]) && isset($_POST["plan"])) {
    $file = $_POST["write"];
    $plan = json_decode($_POST["plan"]);
    $file = $directory . $file . ".json";
    if (!file_exists($file)) {
        file_put_contents($file, json_encode($plan));
        $result->success=true;
    }
}
echo json_encode($result);