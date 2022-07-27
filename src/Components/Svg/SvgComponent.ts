export const iconTemplate = document.createElement("template") as HTMLTemplateElement;

iconTemplate.innerHTML = `
<style>
          :host{
              display: inline-block;
              width:fit-content;
              margin: 0;
              padding: 0;
              border: none;
              box-sizing: border-box;
              --svg-cursor: pointer;
              --path-fill: ;
              --path-stroke: ;
              --svg-margin: 0;
              --svg-height: 20px;
              --svg-width: 20px;
          }
          
          use{
            height:24px;
            width: 24px;
          }
           svg{
               display:grid;
               place-self: center;
             height: var(--svg-height);
             width: var(--svg-width);
               margin: var(--svg-margin, 0);
               cursor: var(--svg-cursor);
               
           }
         
          path.fill{
            fill: var(--path-fill);
          }
          path.stroke{
              stroke: var(--path-stroke);
          }
          use{
              stroke: var(--path-stroke);
          }
          </style>
<svg
            id="icons"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
         
          <defs>
          
          <path id="fb-icon" class="fill"
          part="icon"
              d="M12 0.0613403C5.37273 0.0613403 0 5.43407 0 12.0613C0 18.0777 4.43182 23.0452 10.2065 23.913V15.2419H7.23764V12.0875H10.2065V9.98861C10.2065 6.51352 11.8996 4.98789 14.7878 4.98789C16.1711 4.98789 16.9025 5.09043 17.2489 5.13734V7.8908H15.2787C14.0525 7.8908 13.6244 9.05316 13.6244 10.3633V12.0875H17.2178L16.7302 15.2419H13.6244V23.9386C19.4815 23.1439 24 18.1361 24 12.0613C24 5.43407 18.6273 0.0613403 12 0.0613403Z"
              fill="#2A5DAF"
            />
            <path id="linkedin-icon" class="fill"
            part="icon"
              d="M21.1429 0H2.85714C1.28 0 0 1.28 0 2.85714V21.1429C0 22.72 1.28 24 2.85714 24H21.1429C22.72 24 24 22.72 24 21.1429V2.85714C24 1.28 22.72 0 21.1429 0ZM7.42857 9.14286V20H4V9.14286H7.42857ZM4 5.98286C4 5.18286 4.68571 4.57143 5.71429 4.57143C6.74286 4.57143 7.38857 5.18286 7.42857 5.98286C7.42857 6.78286 6.78857 7.42857 5.71429 7.42857C4.68571 7.42857 4 6.78286 4 5.98286ZM20 20H16.5714C16.5714 20 16.5714 14.7086 16.5714 14.2857C16.5714 13.1429 16 12 14.5714 11.9771H14.5257C13.1429 11.9771 12.5714 13.1543 12.5714 14.2857C12.5714 14.8057 12.5714 20 12.5714 20H9.14286V9.14286H12.5714V10.6057C12.5714 10.6057 13.6743 9.14286 15.8914 9.14286C18.16 9.14286 20 10.7029 20 13.8629V20Z"
              fill="#2A5DAF"
            />
            <g id="menu-icon">
            <path d="M5 12H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 6H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 18H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <g id="refresh-icon">
<path d="M4 6V9.5H7.5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.00811 14.3261C5.52686 15.7575 6.51009 16.9862 7.80964 17.8271C9.10919 18.6681 10.6547 19.0756 12.2132 18.9884C13.7717 18.9012 15.2589 18.324 16.4506 17.3437C17.6423 16.3633 18.4741 15.033 18.8205 13.5532C19.1669 12.0734 19.0092 10.5243 18.3712 9.13915C17.7331 7.75404 16.6494 6.60803 15.2831 5.87378C13.9169 5.13954 12.3422 4.85684 10.7963 5.06828C9.25037 5.27972 7.81704 5.97385 6.71223 7.04608L4 9.5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path class="stroke" id="arrow-up-icon" d="M18 15L12 9L6 15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="arrow-down-icon">
<path class="stroke" d="M6 9L12 15L18 9"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="stroke" d="M6 9L12 15L18 9"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="arrow-left-icon">
<path d="M6 9L12 15L18 9"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9L12 15L18 9"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path class="stroke" id="arrow-right-icon" d="M9 18L15 12L9 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="search-icon">
<path d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z" stroke="var(--path-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19L16 16" stroke="var(--path-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="account-icon">
<path d="M18 19V17.3333C18 16.4493 17.6839 15.6014 17.1213 14.9763C16.5587 14.3512 15.7956 14 15 14H9C8.20435 14 7.44129 14.3512 6.87868 14.9763C6.31607 15.6014 6 16.4493 6 17.3333V19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="checkbox-icon" d="M17.4444 5H6.55556C5.69645 5 5 5.69645 5 6.55556V17.4444C5 18.3036 5.69645 19 6.55556 19H17.4444C18.3036 19 19 18.3036 19 17.4444V6.55556C19 5.69645 18.3036 5 17.4444 5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="checkedbox-icon">
<path d="M10 11.6L12.3077 14L20 6" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12V17.4444C19 17.857 18.8361 18.2527 18.5444 18.5444C18.2527 18.8361 17.857 19 17.4444 19H6.55556C6.143 19 5.74733 18.8361 5.45561 18.5444C5.16389 18.2527 5 17.857 5 17.4444V6.55556C5 6.143 5.16389 5.74733 5.45561 5.45561C5.74733 5.16389 6.143 5 6.55556 5H15.1111" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="info-icon">
<path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="var(--path-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15V12" stroke="var(--path-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9H12.01" stroke="var(--path-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="location-icon">
<path d="M18 10.7273C18 15.1818 12 20.5 12 20.5C12 20.5 6 15.1818 6 10.7273C6 9.20831 6.63214 7.75155 7.75736 6.67748C8.88258 5.60341 10.4087 5 12 5C13.5913 5 15.1174 5.60341 16.2426 6.67748C17.3679 7.75155 18 9.20831 18 10.7273Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="print-icon">
<path d="M6 9V2H18V9" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14H6V22H18V14Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="share-icon">
<path d="M5 13V17.2C5 17.6774 5.18437 18.1352 5.51256 18.4728C5.84075 18.8104 6.28587 19 6.75 19H17.25C17.7141 19 18.1592 18.8104 18.4874 18.4728C18.8156 18.1352 19 17.6774 19 17.2V13" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L12 5L8 9" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V15" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="close-icon">
<path d="M18 6L6 18" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="download-icon">
<path d="M19 14V17.3333C19 17.7754 18.8361 18.1993 18.5444 18.5118C18.2527 18.8244 17.857 19 17.4444 19H6.55556C6.143 19 5.74733 18.8244 5.45561 18.5118C5.16389 18.1993 5 17.7754 5 17.3333V14" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10L12 14L16 10" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="plus-icon">
<path d="M12 5V19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="live-chat-icon" d="M19 14.3333C19 14.7459 18.8361 15.1416 18.5444 15.4333C18.2527 15.725 17.857 15.8889 17.4444 15.8889H8.11111L5 19V6.55556C5 6.143 5.16389 5.74733 5.45561 5.45561C5.74733 5.16389 6.143 5 6.55556 5H17.4444C17.857 5 18.2527 5.16389 18.5444 5.45561C18.8361 5.74733 19 6.143 19 6.55556V14.3333Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="radio-off-icon" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="radio-on-icon">
<path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="fill" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#127BC0"/>
</g>
<g id="logout-icon">
<path d="M9.66667 19H6.55556C6.143 19 5.74733 18.8361 5.45561 18.5444C5.16389 18.2527 5 17.857 5 17.4444V6.55556C5 6.143 5.16389 5.74733 5.45561 5.45561C5.74733 5.16389 6.143 5 6.55556 5H9.66667" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1094 15.8889L18.9983 12L15.1094 8.11108" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0013 12H9.66797" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="payment-icon">
<path d="M19.875 5H4.125C3.1585 5 2.375 5.7835 2.375 6.75V17.25C2.375 18.2165 3.1585 19 4.125 19H19.875C20.8415 19 21.625 18.2165 21.625 17.25V6.75C21.625 5.7835 20.8415 5 19.875 5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.375 10.25H21.625" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="overview-icon">
<path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 16L12 20L20 16" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12L12 16L20 12" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="star-icon" d="M12 4L14.472 8.93691L20 9.73344L16 13.5741L16.944 19L12 16.4369L7.056 19L8 13.5741L4 9.73344L9.528 8.93691L12 4Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="checkmark-icon" d="M19 7L9.375 16L5 11.9091" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="email-icon">
<path d="M5.6 6H18.4C19.28 6 20 6.675 20 7.5V16.5C20 17.325 19.28 18 18.4 18H5.6C4.72 18 4 17.325 4 16.5V7.5C4 6.675 4.72 6 5.6 6Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7L12 13L4 7" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="phone-icon">
<path d="M16.2857 3H7.71429C6.76751 3 6 3.80589 6 4.8V19.2C6 20.1941 6.76751 21 7.71429 21H16.2857C17.2325 21 18 20.1941 18 19.2V4.8C18 3.80589 17.2325 3 16.2857 3Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18H12.01" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="edit-icon" d="M15.5909 5.58492C15.7763 5.39948 15.9964 5.25238 16.2387 5.15201C16.481 5.05165 16.7407 5 17.003 5C17.2652 5 17.5249 5.05165 17.7672 5.15201C18.0095 5.25238 18.2296 5.39948 18.4151 5.58492C18.6005 5.77036 18.7476 5.99051 18.848 6.2328C18.9483 6.47509 19 6.73478 19 6.99703C19 7.25928 18.9483 7.51897 18.848 7.76126C18.7476 8.00355 18.6005 8.2237 18.4151 8.40914L8.88331 17.9409L5 19L6.05909 15.1167L15.5909 5.58492Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="cart-icon">
<path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="compare-icon">
<path d="M19 8H5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 16H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11L5 8L8 5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 19L19 16L16 13" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="save-icon" d="M18 20L12 15.5556L6 20V5.77778C6 5.30628 6.18061 4.8541 6.5021 4.5207C6.82359 4.1873 7.25963 4 7.71429 4H16.2857C16.7404 4 17.1764 4.1873 17.4979 4.5207C17.8194 4.8541 18 5.30628 18 5.77778V20Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="alert-icon">
<path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V12" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15H12.01" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="desktop-icon">
<path d="M18.4 5H5.6C4.71634 5 4 5.70355 4 6.57143V14.4286C4 15.2964 4.71634 16 5.6 16H18.4C19.2837 16 20 15.2964 20 14.4286V6.57143C20 5.70355 19.2837 5 18.4 5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19H15" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="connected-icon">
<path d="M7 12C8.40381 10.7077 10.173 10 12 10C13.827 10 15.5962 10.7077 17 12" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9C6.20977 7.06669 9.05429 6 12 6C14.9457 6 17.7902 7.06669 20 9" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15C9.87643 14.3495 10.9249 14 12 14C13.0751 14 14.1236 14.3495 15 15" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18H12.01" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="shipping-icon">
<path d="M15 5H3V15H15V5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9H18.4286L21 11.25V15H15V9Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="unlock-icon">
<path d="M17.4444 11H6.55556C5.69645 11 5 11.7326 5 12.6364V18.3636C5 19.2674 5.69645 20 6.55556 20H17.4444C18.3036 20 19 19.2674 19 18.3636V12.6364C19 11.7326 18.3036 11 17.4444 11Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11V7.89063C7.999 6.92676 8.37033 5.99692 9.04192 5.28161C9.71351 4.5663 10.6374 4.11655 11.6343 4.01969C12.6313 3.92282 13.63 4.18574 14.4367 4.7574C15.2435 5.32907 15.8006 6.1687 16 7.11329" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="affirm-icon">
<g clip-path="url(#clip0_303_328)">
<path class="fill" d="M5.2535 18.754C4.46043 17.5458 3.99835 16.1039 3.99835 14.5538C3.99835 10.3197 7.44264 6.87542 11.6767 6.87542C15.9108 6.87542 19.3551 10.3197 19.3551 14.5538C19.3551 16.1028 18.8919 17.5458 18.0999 18.754H20.2498C20.8735 17.4857 21.2253 16.0602 21.2253 14.5538C21.2253 9.28849 16.942 5.00635 11.6778 5.00635C6.41361 5.00635 2.13037 9.28959 2.13037 14.5538C2.13037 16.0602 2.48212 17.4857 3.10587 18.754H5.2535Z" fill="#127BC0"/>
<path class="fill" d="M11.809 10.0171C10.4107 10.0171 8.80162 10.6758 7.92771 11.3727L8.72515 13.0517C9.42537 12.4105 10.5582 11.8632 11.5796 11.8632C12.5507 11.8632 13.086 12.1877 13.086 12.842C13.086 13.2822 12.7298 13.5302 12.0591 13.5914C9.54007 13.823 7.58252 14.6095 7.58252 16.543C7.58252 18.0767 8.68801 19.003 10.5068 19.003C11.7237 19.003 12.6796 18.3269 13.1952 17.4344V18.7529H15.463V13.2265C15.4641 10.9445 13.8768 10.0171 11.809 10.0171ZM11.147 17.2312C10.4118 17.2312 10.0087 16.9166 10.0087 16.3999C10.0087 15.3228 11.325 15.0628 13.039 15.0628C13.039 16.1902 12.2841 17.2312 11.147 17.2312Z" fill="#127BC0"/>
</g>
<defs>
<clipPath id="clip0_303_328">
<rect width="19.0971" height="14" fill="white" transform="translate(2.13379 5)"/>
</clipPath>
</defs>
</g>
<g id="warranty-icon">
<path d="M12 21C12 21 19 17.4 19 12V5.7L12 3L5 5.7V12C5 17.4 12 21 12 21Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10L11 14L9 12" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="package-icon">
<path d="M15.5 10L8.5 6" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15.2007V8.79934C18.9997 8.51871 18.9277 8.24308 18.7912 8.00011C18.6547 7.75714 18.4585 7.55538 18.2222 7.41506L12.7778 4.2144C12.5413 4.07395 12.2731 4 12 4C11.7269 4 11.4587 4.07395 11.2222 4.2144L5.77778 7.41506C5.54154 7.55538 5.34532 7.75714 5.2088 8.00011C5.07229 8.24308 5.00028 8.51871 5 8.79934V15.2007C5.00028 15.4813 5.07229 15.7569 5.2088 15.9999C5.34532 16.2429 5.54154 16.4446 5.77778 16.5849L11.2222 19.7856C11.4587 19.9261 11.7269 20 12 20C12.2731 20 12.5413 19.9261 12.7778 19.7856L18.2222 16.5849C18.4585 16.4446 18.6547 16.2429 18.7912 15.9999C18.9277 15.7569 18.9997 15.4813 19 15.2007Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.30469 8.1748L12.3047 12.1748L18.8047 8.6748" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V12" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="gift-icon">
<path d="M18 11V19H6V11" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7H4V11H20V7Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V7" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H8.14286C7.57454 7 7.02949 6.78929 6.62763 6.41421C6.22576 6.03914 6 5.53043 6 5C6 4.46957 6.22576 3.96086 6.62763 3.58579C7.02949 3.21071 7.57454 3 8.14286 3C11.1429 3 12 7 12 7Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H15.8571C16.4255 7 16.9705 6.78929 17.3724 6.41421C17.7742 6.03914 18 5.53043 18 5C18 4.46957 17.7742 3.96086 17.3724 3.58579C16.9705 3.21071 16.4255 3 15.8571 3C12.8571 3 12 7 12 7Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="savings-icon">
<path d="M12 2L14.7704 4.38849L18.4279 4.33956L19.0148 7.95L21.8481 10.2635L19.9769 13.4066L20.6603 17L17.2066 18.205L15.4202 21.3969L12 20.1L8.5798 21.3969L6.79342 18.205L3.33975 17L4.02306 13.4066L2.15192 10.2635L4.98519 7.95L5.57212 4.33956L9.22964 4.38849L12 2Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M12 6V17" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 8H10.75C10.2859 8 9.84075 8.18437 9.51256 8.51256C9.18437 8.84075 9 9.28587 9 9.75C9 10.2141 9.18437 10.6592 9.51256 10.9874C9.84075 11.3156 10.2859 11.5 10.75 11.5H13.25C13.7141 11.5 14.1592 11.6844 14.4874 12.0126C14.8156 12.3408 15 12.7859 15 13.25C15 13.7141 14.8156 14.1592 14.4874 14.4874C14.1592 14.8156 13.7141 15 13.25 15H9" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="registered-icon">
<path d="M12 2L14.7704 4.38849L18.4279 4.33956L19.0148 7.95L21.8481 10.2635L19.9769 13.4066L20.6603 17L17.2066 18.205L15.4202 21.3969L12 20.1L8.5798 21.3969L6.79342 18.205L3.33975 17L4.02306 13.4066L2.15192 10.2635L4.98519 7.95L5.57212 4.33956L9.22964 4.38849L12 2Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M16 10L10.6667 15L8 12.5" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="refurbished-icon">
<path d="M12 2L14.7704 4.38849L18.4279 4.33956L19.0148 7.95L21.8481 10.2635L19.9769 13.4066L20.6603 17L17.2066 18.205L15.4202 21.3969L12 20.1L8.5798 21.3969L6.79342 18.205L3.33975 17L4.02306 13.4066L2.15192 10.2635L4.98519 7.95L5.57212 4.33956L9.22964 4.38849L12 2Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M14 7L16 9L14 11" stroke="var(--path-stroke, #000000)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12V11C8 10.4696 8.1873 9.96086 8.5207 9.58579C8.8541 9.21071 9.30628 9 9.77778 9H16" stroke="var(--path-stroke, #000000)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17L8 15L10 13" stroke="var(--path-stroke, #000000)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12V13C16 13.5304 15.8127 14.0391 15.4793 14.4142C15.1459 14.7893 14.6937 15 14.2222 15H8" stroke="var(--path-stroke, #000000)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="scroll-icon">
<path d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V9Z" stroke="var(--path-stroke, #000000)" stroke-width="2"/>
<path d="M12 10L12 7" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="service-icon">
<path d="M3 12.5C3 10.567 4.567 9 6.5 9H7V16H6.5C4.567 16 3 14.433 3 12.5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M15 20C18 20 18 18 18 16" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M21 12.5C21 10.567 19.433 9 17.5 9H17V16H17.5C19.433 16 21 14.433 21 12.5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linejoin="round"/>
<path d="M11 20C11 19.4477 11.4477 19 12 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H12C11.4477 21 11 20.5523 11 20Z" stroke="var(--path-stroke, #000000)" stroke-width="2"/>
</g>
<g id="register-icon">
<path d="M12 18H19" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2504 5.47176C15.5524 5.1697 15.9621 5 16.3893 5C16.6008 5 16.8103 5.04166 17.0057 5.12261C17.2011 5.20355 17.3787 5.32219 17.5282 5.47176C17.6778 5.62133 17.7964 5.79889 17.8774 5.99431C17.9583 6.18972 18 6.39917 18 6.61069C18 6.82221 17.9583 7.03166 17.8774 7.22708C17.7964 7.42249 17.6778 7.60006 17.5282 7.74962L8.03715 17.2407L5 18L5.75929 14.9629L15.2504 5.47176Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="play-icon">
<path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9L15 12L10 15V9Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="play-alt-icon" d="M7 5L19 12L7 19V5Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="phone-alt-icon" d="M19.9995 15.9791V18.3877C20.0004 18.6113 19.9545 18.8327 19.8648 19.0375C19.775 19.2424 19.6434 19.4263 19.4783 19.5775C19.3132 19.7286 19.1183 19.8437 18.906 19.9154C18.6938 19.987 18.4689 20.0136 18.2457 19.9935C15.7702 19.725 13.3923 18.8808 11.3031 17.5286C9.35937 16.2959 7.71141 14.6512 6.47627 12.7113C5.11669 10.6168 4.27059 8.23206 4.00653 5.75036C3.98643 5.52834 4.01286 5.30457 4.08416 5.0933C4.15546 4.88203 4.27005 4.6879 4.42065 4.52325C4.57124 4.35861 4.75454 4.22706 4.95886 4.13699C5.16319 4.04691 5.38407 4.00029 5.60744 4.00008H8.02086C8.41128 3.99624 8.78977 4.13422 9.0858 4.3883C9.38182 4.64237 9.57517 4.99521 9.62981 5.38103C9.73168 6.15185 9.92059 6.9087 10.1929 7.63713C10.3012 7.9245 10.3246 8.23682 10.2604 8.53707C10.1963 8.83732 10.0472 9.11292 9.83093 9.33121L8.80925 10.3509C9.95446 12.3609 11.6221 14.0252 13.6361 15.1682L14.6578 14.1485C14.8765 13.9326 15.1527 13.7839 15.4535 13.7198C15.7544 13.6558 16.0673 13.6792 16.3552 13.7872C17.0851 14.059 17.8435 14.2476 18.6158 14.3492C19.0066 14.4042 19.3635 14.6007 19.6186 14.9012C19.8737 15.2017 20.0093 15.5853 19.9995 15.9791Z" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g id="list-icon">
<path d="M7.99609 6.04443H20.9961" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99609 12.0444H20.9961" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99609 18.0444H20.9961" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.99609 6.04443H3.00609" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.99609 12.0444H3.00609" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.99609 18.0444H3.00609" stroke="var(--path-stroke, #000000)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="where-to-buy-icon" class="fill" d="M12.0001 1C8.14079 1 5 4.29318 5 8.34315C5 10.6711 6.18919 12.688 7.56109 14.5972C8.45408 15.8396 9.43186 17.0488 10.2774 18.2638C9.55025 18.3853 8.90347 18.5778 8.37247 18.8464C8.01357 19.0277 7.70271 19.2385 7.46099 19.5148C7.21908 19.7908 7.04167 20.1533 7.04167 20.5555C7.04167 21.015 7.27178 21.4151 7.57022 21.7109C7.86869 22.0066 8.24794 22.2316 8.69144 22.4175C9.57807 22.789 10.7288 23 12 23C13.2712 23 14.4219 22.789 15.3086 22.4175C15.7521 22.2316 16.1313 22.0066 16.4298 21.7109C16.7282 21.4151 16.9583 21.015 16.9583 20.5555C16.9583 20.1533 16.7809 19.7907 16.539 19.5148C16.2973 19.2385 15.9864 19.0277 15.6275 18.8464C15.0965 18.5778 14.4497 18.3853 13.7226 18.2638C14.5681 17.0487 15.546 15.8396 16.4389 14.5972C17.8108 12.6877 19 10.6708 19 8.34315C19 4.29329 15.8595 1 12.0001 1ZM12.0001 2.22233C15.2285 2.22233 17.8336 4.95242 17.8336 8.34326C17.8336 10.2278 16.8352 12.0171 15.5093 13.8624C14.3722 15.4449 13.0388 17.0541 12.0001 18.7895C10.9615 17.0541 9.62806 15.4449 8.49096 13.8624C7.16504 12.0172 6.16669 10.2279 6.16669 8.34326C6.16669 4.95263 8.77174 2.22233 12.0001 2.22233ZM12.0001 4.36117C9.91291 4.36117 8.20835 6.14687 8.20835 8.33344C8.20835 10.52 9.91291 12.3057 12.0001 12.3057C14.0874 12.3057 15.7919 10.52 15.7919 8.33344C15.7919 6.14687 14.0874 4.36117 12.0001 4.36117ZM12.0001 5.58328C13.4569 5.58328 14.6251 6.80736 14.6251 8.33339C14.6251 9.85942 13.4568 11.0833 12.0001 11.0833C10.5434 11.0833 9.37519 9.85942 9.37519 8.33339C9.37519 6.80736 10.5434 5.58328 12.0001 5.58328ZM11.0159 19.3906C11.1845 19.6694 11.3454 19.9501 11.4897 20.231C11.5924 20.4253 11.788 20.546 12.0002 20.546C12.2124 20.546 12.4079 20.4253 12.5106 20.231C12.6549 19.95 12.8158 19.6693 12.9845 19.3906C13.862 19.4812 14.6245 19.6907 15.1265 19.9445C15.3918 20.0786 15.581 20.2201 15.6825 20.3358C15.784 20.4518 15.792 20.5149 15.792 20.5556C15.792 20.6022 15.7722 20.6798 15.6278 20.8228C15.4835 20.9659 15.2288 21.1353 14.8805 21.2813C14.1836 21.5731 13.1452 21.7777 12.0002 21.7777C10.8551 21.7777 9.81668 21.5731 9.11984 21.2813C8.77153 21.1353 8.51681 20.9659 8.37253 20.8228C8.22808 20.6798 8.20835 20.6022 8.20835 20.5556C8.20835 20.5149 8.21628 20.4518 8.31781 20.3358C8.41933 20.2201 8.60854 20.0786 8.87386 19.9445C9.37578 19.6907 10.1383 19.4811 11.0159 19.3906Z" fill="#127BC0" stroke="var(--path-stroke, #000000)"/>
<path id="language-icon" class="fill" d="M12 4C7.02923 4 3 8.02923 3 13C3 17.9708 7.02961 22 12 22C16.9708 22 21 17.9704 21 13C21 8.02923 16.9708 4 12 4ZM12 21.1001C11.2876 21.1001 10.3688 19.7725 9.80757 17.5001H14.1924C13.6312 19.7725 12.7124 21.1001 12 21.1001ZM9.61455 16.5999C9.44279 15.6685 9.33235 14.6124 9.30899 13.4498H14.6909C14.6676 14.6124 14.5571 15.6683 14.3854 16.5999H9.61455ZM3.92249 13.45H8.40879C8.43094 14.5651 8.53129 15.6278 8.70125 16.5999H4.75456C4.27619 15.6413 3.98494 14.5769 3.92256 13.45H3.92249ZM11.9998 4.89973C12.7122 4.89973 13.631 6.2273 14.1923 8.49973H9.80741C10.3687 6.2273 11.2875 4.89973 11.9998 4.89973ZM14.3853 9.39992C14.5571 10.3314 14.6675 11.3874 14.6909 12.55L9.30891 12.5499C9.33226 11.3873 9.4427 10.3314 9.61447 9.39977L14.3853 9.39992ZM8.40895 12.5499H3.92264C3.98502 11.423 4.27627 10.3585 4.75464 9.39992H8.70171C8.5316 10.3721 8.43125 11.4347 8.40911 12.5499H8.40895ZM15.591 13.45H20.0774C20.015 14.5769 19.7239 15.6413 19.2455 16.6001H15.2984C15.4684 15.6278 15.5687 14.5651 15.5909 13.45H15.591ZM15.591 12.5499C15.5689 11.4347 15.4686 10.3721 15.2986 9.39992H19.2457C19.724 10.3586 20.0151 11.4231 20.0775 12.55L15.591 12.5499ZM18.7306 8.49981H15.1146C14.7826 7.06663 14.2997 5.87888 13.7167 5.0868C15.7966 5.53775 17.5816 6.78713 18.7307 8.49981H18.7306ZM10.2834 5.0868C9.70042 5.87888 9.21749 7.06663 8.88543 8.49981H5.26946C6.41848 6.78713 8.20348 5.53775 10.2834 5.0868H10.2834ZM5.26938 17.5H8.88535C9.21743 18.9332 9.70034 20.121 10.2833 20.913C8.2034 20.4621 6.41836 19.2129 5.26931 17.5H5.26938ZM13.7166 20.913C14.2996 20.1208 14.7825 18.9332 15.1146 17.5H18.7305C17.5815 19.2129 15.7965 20.4621 13.7166 20.913H13.7166Z" fill="#127BC0" stroke="var(--path-stroke, #000000)"/>
<path id="ads-icon" class="fill" d="M16.4285 7.44024V8.98126H11.0257C9.98356 7.76971 8.42046 7 6.67218 7C3.54489 7 1 9.46923 1 12.5033C1 15.5377 3.54493 18 6.67218 18C8.41863 18 9.98348 17.2326 11.0257 16.0255H16.4285V17.5665C16.523 18.0035 16.8587 18.0421 17.1871 17.8899L22.8593 12.8265C23.0469 12.662 23.0469 12.3376 22.8593 12.173L17.1871 7.11669C16.8819 6.88921 16.4359 7.04097 16.4285 7.44002V7.44024ZM6.67218 7.87367C9.30901 7.87367 11.4367 9.94509 11.4367 12.5037C11.4367 15.0623 9.30885 17.1266 6.67218 17.1266C4.03552 17.1266 1.90763 15.062 1.90763 12.5037C1.90763 9.94525 4.03552 7.87367 6.67218 7.87367V7.87367ZM17.3361 8.43784L21.8808 12.5036L17.3361 16.5627V15.5858C17.3361 15.3553 17.1199 15.1456 16.8824 15.1456H11.6497C12.0948 14.3614 12.3445 13.461 12.3445 12.5039C12.3445 11.547 12.0947 10.6474 11.6497 9.86216H16.8824C17.12 9.86216 17.3361 9.65235 17.3361 9.42197V8.43784ZM6.67218 8.54106C6.17098 8.54106 5.76455 8.93533 5.76455 9.42165C5.76455 9.90793 6.17082 10.3022 6.67218 10.3022C7.17339 10.3022 7.57981 9.90797 7.57981 9.42165C7.57981 8.93537 7.17355 8.54106 6.67218 8.54106ZM6.40276 10.7426C5.99775 10.7426 5.7647 11.092 5.7647 11.403V15.8058C5.7647 16.1168 5.9979 16.4663 6.40276 16.4663H6.89906C7.28176 16.4271 7.57365 16.1342 7.57968 15.8058V11.403C7.53459 10.9783 7.23701 10.8061 6.89906 10.7426H6.40276Z" fill="#127BC0" stroke="var(--path-stroke, #000000)" stroke-width="0.3"/>








          
          </defs>
          <use href="" x="0"></use>
          </svg>
`;


export class SvgComponent extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.shadowRoot!.appendChild(iconTemplate.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["data-icon"];
  }
 
  attributeChangedCallback(name: string, oldValue: string, newValue:string) {
    this.updateStyle(this);
  }

  updateStyle(elem: any) {
    const shadow = elem.shadowRoot;
    shadow.querySelector("use").href.baseVal = `#${elem.dataset.icon}`;
  }

}



window.customElements.define("svg-component", SvgComponent);



