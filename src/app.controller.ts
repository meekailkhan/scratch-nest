import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./app.service";
import { createUserDto } from "./dto/userCreate.dto";


@Controller()
export class appController{
   
}