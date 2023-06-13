import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/dashboard-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/simple-menu/dashboard-overview-2",
            title: "Overview 2",
          },
          {
            icon: "",
            pathname: "/simple-menu/dashboard-overview-3",
            title: "Overview 3",
          },
          {
            icon: "",
            pathname: "/simple-menu/dashboard-overview-4",
            title: "Overview 4",
          },
        ],
      },
      {
        icon: "Box",
        title: "Menu Layout",
        subMenu: [
          {
            icon: "",
            pathname: "/",
            title: "Side Menu",
            ignore: true,
          },
          {
            icon: "",
            pathname: "/simple-menu/dashboard-overview-1",
            title: "Simple Menu",
            ignore: true,
          },
          {
            icon: "",
            pathname: "/top-menu/dashboard-overview-1",
            title: "Top Menu",
            ignore: true,
          },
        ],
      },
      {
        icon: "ShoppingBag",
        title: "E-Commerce",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/categories",
            title: "Categories",
          },
          {
            icon: "",
            pathname: "/simple-menu/add-product",
            title: "Add Product",
          },
          {
            icon: "",
            pathname: "/simple-menu/products",
            title: "Products",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/product-list",
                title: "Product List",
              },
              {
                icon: "",
                pathname: "/simple-menu/product-grid",
                title: "Product Grid",
              },
            ],
          },
          {
            icon: "",
            pathname: "/simple-menu/transactions",
            title: "Transactions",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/transaction-list",
                title: "Transaction List",
              },
              {
                icon: "",
                pathname: "/simple-menu/transaction-detail",
                title: "Transaction Detail",
              },
            ],
          },
          {
            icon: "",
            pathname: "/simple-menu/sellers",
            title: "Sellers",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/seller-list",
                title: "Seller List",
              },
              {
                icon: "",
                pathname: "/simple-menu/seller-detail",
                title: "Seller Detail",
              },
            ],
          },
          {
            icon: "",
            pathname: "/simple-menu/reviews",
            title: "Reviews",
          },
        ],
      },
      {
        icon: "Inbox",
        pathname: "/simple-menu/inbox",
        title: "Inbox",
      },
      {
        icon: "HardDrive",
        pathname: "/simple-menu/file-manager",
        title: "File Manager",
      },
      {
        icon: "CreditCard",
        pathname: "/simple-menu/point-of-sale",
        title: "Point of Sale",
      },
      {
        icon: "MessageSquare",
        pathname: "/simple-menu/chat",
        title: "Chat",
      },
      {
        icon: "FileText",
        pathname: "/simple-menu/post",
        title: "Post",
      },
      {
        icon: "Calendar",
        pathname: "/simple-menu/calendar",
        title: "Calendar",
      },
      "devider",
      {
        icon: "Edit",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/crud-data-list",
            title: "Data List",
          },
          {
            icon: "",
            pathname: "/simple-menu/crud-form",
            title: "Form",
          },
        ],
      },
      {
        icon: "Users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/users-layout-1",
            title: "Layout 1",
          },
          {
            icon: "",
            pathname: "/simple-menu/users-layout-2",
            title: "Layout 2",
          },
          {
            icon: "",
            pathname: "/simple-menu/users-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Trello",
        title: "Profile",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/profile-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/simple-menu/profile-overview-2",
            title: "Overview 2",
          },
          {
            icon: "",
            pathname: "/simple-menu/profile-overview-3",
            title: "Overview 3",
          },
        ],
      },
      {
        icon: "Layout",
        title: "Pages",
        subMenu: [
          {
            icon: "",
            title: "Wizards",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/wizard-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/simple-menu/wizard-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/simple-menu/wizard-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            title: "Blog",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/blog-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/simple-menu/blog-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/simple-menu/blog-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            title: "Pricing",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/pricing-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/simple-menu/pricing-layout-2",
                title: "Layout 2",
              },
            ],
          },
          {
            icon: "",
            title: "Invoice",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/invoice-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/simple-menu/invoice-layout-2",
                title: "Layout 2",
              },
            ],
          },
          {
            icon: "",
            title: "FAQ",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/faq-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/simple-menu/faq-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/simple-menu/faq-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            pathname: "login",
            title: "Login",
          },
          {
            icon: "",
            pathname: "register",
            title: "Register",
          },
          {
            icon: "",
            pathname: "error-page",
            title: "Error Page",
          },
          {
            icon: "",
            pathname: "/simple-menu/update-profile",
            title: "Update profile",
          },
          {
            icon: "",
            pathname: "/simple-menu/change-password",
            title: "Change Password",
          },
        ],
      },
      "devider",
      {
        icon: "Inbox",
        title: "Components",
        subMenu: [
          {
            icon: "",
            title: "Table",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/regular-table",
                title: "Regular Table",
              },
              {
                icon: "",
                pathname: "/simple-menu/tabulator",
                title: "Tabulator",
              },
            ],
          },
          {
            icon: "",
            title: "Overlay",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/modal",
                title: "Modal",
              },
              {
                icon: "",
                pathname: "/simple-menu/slide-over",
                title: "Slide Over",
              },
              {
                icon: "",
                pathname: "/simple-menu/notification",
                title: "Notification",
              },
            ],
          },
          {
            icon: "",
            pathname: "/simple-menu/tab",
            title: "Tab",
          },
          {
            icon: "",
            pathname: "/simple-menu/accordion",
            title: "Accordion",
          },
          {
            icon: "",
            pathname: "/simple-menu/button",
            title: "Button",
          },
          {
            icon: "",
            pathname: "/simple-menu/alert",
            title: "Alert",
          },
          {
            icon: "",
            pathname: "/simple-menu/progress-bar",
            title: "Progress Bar",
          },
          {
            icon: "",
            pathname: "/simple-menu/tooltip",
            title: "Tooltip",
          },
          {
            icon: "",
            pathname: "/simple-menu/dropdown",
            title: "Dropdown",
          },
          {
            icon: "",
            pathname: "/simple-menu/typography",
            title: "Typography",
          },
          {
            icon: "",
            pathname: "/simple-menu/icon",
            title: "Icon",
          },
          {
            icon: "",
            pathname: "/simple-menu/loading-icon",
            title: "Loading Icon",
          },
        ],
      },
      {
        icon: "Sidebar",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/regular-form",
            title: "Regular Form",
          },
          {
            icon: "",
            pathname: "/simple-menu/datepicker",
            title: "Datepicker",
          },
          {
            icon: "",
            pathname: "/simple-menu/tom-select",
            title: "Tom Select",
          },
          {
            icon: "",
            pathname: "/simple-menu/file-upload",
            title: "File Upload",
          },
          {
            icon: "",
            pathname: "/simple-menu/wysiwyg-editor",
            title: "Wysiwyg Editor",
          },
          {
            icon: "",
            pathname: "/simple-menu/validation",
            title: "Validation",
          },
        ],
      },
      {
        icon: "HardDrive",
        title: "Widgets",
        subMenu: [
          {
            icon: "",
            pathname: "/simple-menu/chart",
            title: "Chart",
          },
          {
            icon: "",
            pathname: "/simple-menu/slider",
            title: "Slider",
          },
          {
            icon: "",
            pathname: "/simple-menu/image-zoom",
            title: "Image Zoom",
          },
        ],
      },
    ],
  },
});

export { simpleMenu };
