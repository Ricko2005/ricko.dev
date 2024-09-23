<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Ajoutez cette ligne si la table n'a pas de colonnes "created_at" et "updated_at"
    public $timestamps = true;

    // Liste des champs que vous souhaitez autoriser à être remplis en masse
    protected $fillable = ['tache', 'start', 'end', 'status', 'user_id'];
}

