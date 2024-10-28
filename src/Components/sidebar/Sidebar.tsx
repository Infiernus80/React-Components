import { FaCaretUp } from "react-icons/fa";
import "./sidebar.css";
import { links_Props } from "../../interfaces/links_interface";
import React from "react";

interface Props {
  links_data: links_Props[];
}

export const Sidebar = ({ links_data }: Props) => {
  return (
    <nav id="nav-bar">
      <input type="checkbox" id="nav-toggle" />

      <div id="nav-header">
        <a id="nav-title" target="_blank" rel="noopener noreferrer">
          EJSR
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>

      <div id="nav-content">
        {/* //TODO: Realizar una configuración para poder mostrar todas las opciones de la sidebar */}
        {links_data.map((links, index) => (
          <React.Fragment key={index}>
            <div className="nav-button" onClick={() => console.log(links.path)}>
              <i className="fas fa-palette">
                {links.icon && <links.icon size={25} />}
              </i>
              <span>{links.label}</span>
            </div>
            {links.boolHr && <hr />}
          </React.Fragment>
        ))}

        <div id="nav-content-highlight"></div>
      </div>

      <input type="checkbox" id="nav-footer-toggle" />

      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img
              src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
              alt="Avatar"
            />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
              rel="noopener noreferrer"
            >
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up">
              <FaCaretUp />
            </i>
          </label>
        </div>

        <div id="nav-footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </nav>
  );
};
