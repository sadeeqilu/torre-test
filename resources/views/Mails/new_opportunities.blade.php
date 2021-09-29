<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Account</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <style>

    </style>
</head>
<body>
    <div class="container p-5">

        <div class="row justify-content-md-center">
            
            <div class="col-md-8  col-sm-12 border bg-light rounded-lg p-3">
                <p class="lead"> Dear <strong>{{ $user->last_name }}</strong>,</p>

                <h3> Some new and exciting opportunites have been added on Torre!</h3>
            
                <p> 
                   Check out your account to see more about these new opportunities.
                </p>

                @php
                    foreach($opportunities as $opportunity){
                        <dl class="row">
                                <dt class="col-sm-3">Postion</dt>
                                <dd class="col-sm-9">{{ $opportunity->objective }}</dd>
                        </dl>
                    }
                @endphp
                
            
                <p>
                <small>For any additional inquiry or if you receive this mail in error, kindly contact the admin on <mail>ilusadiq@gmail.com</mail> </small>
                </p>
            
            
                Kind Regards,<br>
                Administrator.
            </div>
           
          </div>

    

    </div>

</body>
</html>