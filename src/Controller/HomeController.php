<?php

namespace App\Controller;

use Sonata\SeoBundle\Seo\SeoPageInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(SeoPageInterface $seoPage): Response
    {
       // $seoPage = $this->container->get('sonata.seo.page');

        $seoPage
            ->setTitle('AURORA WEB SERVICES')
            ->addMeta('name', 'description', 'Best digital services')
            ->addMeta('property', 'og:title', 'Best digital services')
            ->addMeta('property', 'og:type', 'blog')
            ->addMeta('property', 'og:url',   '/')
            ->addMeta('property', 'og:description', 'Best digital services')
            ->addTitle('Home')
        ;
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
