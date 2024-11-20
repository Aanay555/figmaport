
import React from 'react'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (
      <>
        <div className="foot">
          <div className="icons">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
              <FaLinkedin/>
          </div>

            <p className="copyright">Copyright ©2020 All rights reserved.</p>
        </div>
      </>
    );
  }