<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Outlet for SPA</title>
</head>
<body>
<div id="app">
    <welcome :title="'This cool app'"></welcome>
</div>
<script type="text/javascript" src="{{asset('js/admin/app.js')}}"></script>
</body>
</html>
