<?php

namespace App\Providers;

use App\Http\Middleware\Adminhtml\ViewFinder;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $frontendNamespace = 'App\Http\Controllers\Frontend';

    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $adminhtmlNamespace = 'App\Http\Controllers\Adminhtml';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //
        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->frontendNamespace)
             ->name('frontend.')
             ->group(base_path('routes/frontend/web.php'));

        Route::middleware('web')
            ->namespace($this->adminhtmlNamespace)
            ->prefix('admin')
            ->name('admin.')
            ->middleware(ViewFinder::class)
            ->group(base_path('routes/adminhtml/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        $this->initAdminApi();

    }

    private function initAdminApi()
    {
        Route::prefix('admin/api/v1')
            ->middleware('api')
            ->namespace('App\Http\Controllers\Adminhtml\Api\V1')
            ->group(base_path('routes/adminhtml/api/v1.php'));
    }
}
