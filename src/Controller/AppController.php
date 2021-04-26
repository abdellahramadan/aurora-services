<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/contact-us', name: 'app_contact')]
    public function index(): Response
    {
        return $this->render('app/contact.html.twig', [
            
        ]);
    }
}
