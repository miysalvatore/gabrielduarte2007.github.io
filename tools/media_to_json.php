<?php
$videoDirectory = '../media/video';
$videoFiles = scandir($videoDirectory);
unset($videoFiles[0]);
unset($videoFiles[1]);
//var_dump($videoFiles);

$audioDirectory = '../media/audio';
$audioFiles = scandir($audioDirectory);
unset($audioFiles[0]);
unset($audioFiles[1]);
//var_dump($audioFiles);

// Get audios

$projects = [];

foreach ($audioFiles as $audio) {
    $filename = str_replace(".mp3", "", $audio);

    $isVideo = in_array($filename . ".mp4", $videoFiles);

    $tipo = $isVideo ? "VIDEO" : "AUDIO";

    $project = [
        "id" => $filename,
        "titulo" => "",
        "subtitulo" => "",
        "tipo" => $tipo,
    ];

    if ($tipo === "VIDEO") {
        $project["youtube"] = "";
    } else {
        $project["soundcloud"] = "";
        $project["imagem"] = "";
    }

    $project["tags"] = [];

    $projects[] = $project;
}

echo json_encode($projects);

?>