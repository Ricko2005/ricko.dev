<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();



// Route pour afficher la liste des tâches
Route::get('/home', [HomeController::class, 'index'])->name('home');

// Route pour ajouter une tâche
Route::post('/home', [HomeController::class, 'store'])->name('tasks.store');

// Route pour mettre à jour une tâche
Route::put('/tasks/{task}', [HomeController::class, 'update'])->name('tasks.update');

// Route pour supprimer une tâche
Route::delete('/tasks/{task}', [HomeController::class, 'destroy'])->name('tasks.destroy');

// Route pour marquer une tâche comme accomplie
Route::post('/tasks/{task}/complete', [HomeController::class, 'complete'])->name('tasks.complete');



