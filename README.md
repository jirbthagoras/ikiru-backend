# Ikiru Backend

## Overview

Backend application made for Ikiru project, a Life Logger WebApp that allows you to track your life yaps, and the most beautiful part is: you cannot delete what you already write and share. Yes! That is definitely a curse! But hear me out, sometime you will need those unwanted yaps... and maybe it is a crucial part to 'debug' your life.

## Architecture

So I write this Readme by myself because it is a backend application which at least I can explain 'how' and 'why'. Maybe the frontend's readme will be written by my slaves.

This backend application for now will be consisted of 2 services, which is the main services and the email service. Though, the email service will be more likely acts like a worker to send the email (it does not have any logic in it, but yeah I still call it a service anyway).

Why I separate those service? Simply It's because I wanted to get rid of the pressure of sending email from my main service so I separate it and make Redis PubSub as a bridge soon.

## ToDo

- Craft the schema
