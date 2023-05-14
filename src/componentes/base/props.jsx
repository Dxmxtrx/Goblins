import React from 'react'
import 'boxicons';
import { BiAlignJustify } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import Image from "../base/Goblin.png"
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { IoMdArrowDropdownCircle } from "react-icons/io";




export default function Parametros (props , evento) {
    return (
        <div id="general">
            <div id='header'>
            <logo id='#' class='logo'>{props.logo}</logo>
            <a>
                <l class='navlist' onClick={evento}>
                    <list><p id='#'>{props.list1}</p></list>
                    <list><p id='#'>{props.list2}</p></list>
                    <list><p id='#'>{props.list3}</p></list>
                    <list><p id='#'>{props.list4}</p></list>
                    <list><p id='#'>{props.list5}</p></list>
                    <list><p id='#'>{props.list6}</p></list>

                </l>
            </a>
            </div>
        <div class="bx-menu" id="Menu-icon"><BiAlignJustify /></div> 
        <section class="hero">
            <div class="hero-name">
                <h5>#2 Trending</h5>
                <h4>Lead Supercell</h4>
                <h1>GOBLINS</h1>
                <p>Join with other players in the world, this game is 100% free, join us</p>
                <a href='#'>Compare</a>
                <a href='#' class='ct'><BiPlay fontSize={10}/>Watch the Gameplay</a>
            </div>

            <div class="img-hero">
              <img id='imgh' src={Image}></img>
            </div>

            <div class='icons'>
                <a href='#'><BsInstagram color='white' fontSize={24}/></a>
                <a href='#'><BsYoutube color='white' fontSize={24}/></a>
                <a href='#'><BsTelegram color='white' fontSize={24}/></a>
            </div>

            <div class='scroll-down'>
                <a href='#'><IoMdArrowDropdownCircle fontSize={25} color='white'/></a>
            </div>
            </section>

        </div>

        

    )
}