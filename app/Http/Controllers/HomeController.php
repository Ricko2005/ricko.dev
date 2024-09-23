<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // Affiche la liste des tâches avec le formulaire sur la même page
    public function index(Request $request)
{
    $status = $request->input('status', 'pending'); // Filtrer par statut (par défaut 'pending')
    $tasks = Task::where('user_id', Auth::id()) // Filtrer par utilisateur connecté
                 ->where('status', $status)
                 ->get();

    return view('home', compact('tasks'));
}
    
    // Ajoute une nouvelle tâche
    public function store(Request $request)
    {
        $request->validate([
            'tache' => 'required|string|max:255',
            'start' => 'required|date',
            'end' => 'required|date',
        ]);

        Task::create([
            'tache' => $request->input('tache'),
            'start' => $request->input('start'),
            'end' => $request->input('end'),
            'status' => 'pending', // Assurez-vous que 'status' a une valeur par défaut
          'user_id' => Auth::id(), // Associe la tâche à l'utilisateur connecté
        ]);

        return redirect()->back()->with('success', 'Tâche enregistrée avec succès !');
    }

    // Met à jour une tâche existante
    // Met à jour une tâche existante
public function update(Request $request, Task $task)
{
    $this->authorize('update', $task);

    $request->validate([
        'tache' => 'required|string|max:255',
        'start' => 'required|date',
        'end' => 'required|date',
    ]);

    $task->update([
        'tache' => $request->input('tache'),
        'start' => $request->input('start'),
        'end' => $request->input('end'),
    ]);

    return redirect()->route('home')->with('success', 'Tâche mise à jour avec succès !');
}

// Supprime une tâche
public function destroy(Task $task)
{
    $this->authorize('delete', $task);
    $task->delete();
    return redirect()->route('home')->with('success', 'Tâche supprimée avec succès !');
}

// Marque une tâche comme accomplie
public function complete(Task $task)
{
    $this->authorize('update', $task);
    $task->update(['status' => 'complete']);
    return redirect()->route('home')->with('success', 'Tâche marquée comme accomplie !');
}
}