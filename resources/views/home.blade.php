@extends('layouts.app')

@section('content')

</div>
@if(session('success'))
<div class="alert alert-success d-flex justify-content-center">{{ session('success') }}</div>
@endif

<div class="container d-flex justify-content-center ">
 <form action="{{ url()->current() }}" method="post" class="rounded-3 bg-white p-3" id="formulaire" style="width: 600px;">
        @csrf
    <div class="card-body">
            <input type="text" name="tache" id="" class="form-control mb-3" placeholder="Enter your task" required>
            <input type="date" name="start" id="" class="form-control mb-3" placeholder="Enter your date start" required>
            <input type="date" name="end" id="" class="form-control mb-3" placeholder="Enter your end date" required>
        </div>

        <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-warning text-light ">Enregistrer une tache a éxecuter</button>
        </div>
    </form>
</div>


<div class="btn-group" role="group" aria-label="Filter tasks">
  <a href="{{ route('home', ['status' => 'pending']) }}" class="btn btn-primary">Tâches en attente</a>
  <a href="{{ route('home', ['status' => 'complete']) }}" class="btn btn-success">Tâches complètes</a>
  
</div>



<table class="" style="margin-top: 10%">
  <thead>
    <tr>
    <th>#</th>
    <th>Tache a accomplir</th>
    <th>Date de debut</th>
    <th>Date de  fin</th>
    <th>Action</th>
    </tr>
  </thead>


    <tbody>
     <tbody>
        @foreach($tasks as $task)
            <tr>
                <td>{{ $task->id }}</td>
                <td>{{ $task->tache }}</td>
                <td>{{ $task->start }}</td>
                <td>{{ $task->end }}</td>
                <td>
               

                    <!-- Formulaire pour modifier -->
                    <form action="{{ route('tasks.update', $task->id) }}" method="POST">
                      @csrf
                      @method('PUT')
                      
                      <input type="text" name="tache" value="{{ $task->tache }}" style="width: 400px; height: 50px;" required>
                      <input type="date" name="start" value="{{ $task->start }}" style="width: 400px; height: 50px;" required>
                      <input type="date" name="end" value="{{ $task->end }}" style="width: 400px; height: 50px;" required>
                      
                      <button type="submit">Modifier</button>
                  </form>
                  

                  
                    <!-- Formulaire pour supprimer -->
                    <form action="{{ route('tasks.destroy', $task->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Supprimer</button>
                    </form>


                    {{-- =========== Formulaire pour tache accomplir================= --}}
                    <form action="{{ route('tasks.complete', $task->id) }}" method="POST">
                      @csrf
                      <input type="hidden" name="status" value="completed">
                      <button type="submit" class="btn btn-success">Marquer comme accomplie</button>
                  </form>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>

  
</table>

    
@endsection
