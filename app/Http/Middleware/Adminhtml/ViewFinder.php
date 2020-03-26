<?php

namespace App\Http\Middleware\Adminhtml;

use Closure;
use Illuminate\Support\Facades\View;

class ViewFinder
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        View::getFinder()
            ->setPaths([
                resource_path('adminhtml/views')
                ]
            );
        return $next($request);
    }
}
