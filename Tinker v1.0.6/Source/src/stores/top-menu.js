import { atom } from "recoil";

const topMenu = atom({
  key: "topMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        subMenu: [
          {
            icon: "",
            pathname: "/top-menu/dashboard-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/top-menu/dashboard-overview-2",
            title: "Overview 2",
          },
          {
            icon: "",
            pathname: "/top-menu/dashboard-overview-3",
            title: "Overview 3",
          },
          {
            icon: "",
            pathname: "/top-menu/dashboard-overview-4",
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
        icon: "Activity",
        title: "Apps",
        subMenu: [
          {
            icon: "Users",
            title: "Users",
            subMenu: [
              {
                icon: "",
                pathname: "/top-menu/users-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/users-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/top-menu/users-layout-3",
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
                pathname: "/top-menu/profile-overview-1",
                title: "Overview 1",
              },
              {
                icon: "",
                pathname: "/top-menu/profile-overview-2",
                title: "Overview 2",
              },
              {
                icon: "",
                pathname: "/top-menu/profile-overview-3",
                title: "Overview 3",
              },
            ],
          },
          {
            icon: "ShoppingBag",
            pathname: "/top-menu/ecommerce",
            title: "E-Commerce",
            subMenu: [
              {
                icon: "",
                pathname: "/top-menu/categories",
                title: "Categories",
              },
              {
                icon: "",
                pathname: "/top-menu/add-product",
                title: "Add Product",
              },
              {
                icon: "",
                pathname: "/top-menu/product-list",
                title: "Product List",
              },
              {
                icon: "",
                pathname: "/top-menu/product-grid",
                title: "Product Grid",
              },
              {
                icon: "",
                pathname: "/top-menu/transaction-list",
                title: "Transaction List",
              },
              {
                icon: "",
                pathname: "/top-menu/transaction-detail",
                title: "Transaction Detail",
              },
              {
                icon: "",
                pathname: "/top-menu/seller-list",
                title: "Seller List",
              },
              {
                icon: "",
                pathname: "/top-menu/seller-detail",
                title: "Seller Detail",
              },
              {
                icon: "",
                pathname: "/top-menu/reviews",
                title: "Reviews",
              },
            ],
          },
          {
            icon: "Inbox",
            pathname: "/top-menu/inbox",
            title: "Inbox",
          },
          {
            icon: "Folder",
            pathname: "/top-menu/file-manager",
            title: "File Manager",
          },
          {
            icon: "CreditCard",
            pathname: "/top-menu/point-of-sale",
            title: "Point of Sale",
          },
          {
            icon: "MessageSquare",
            pathname: "/top-menu/chat",
            title: "Chat",
          },
          {
            icon: "FileText",
            pathname: "/top-menu/post",
            title: "Post",
          },
          {
            icon: "Calendar",
            pathname: "/top-menu/calendar",
            title: "Calendar",
          },
          {
            icon: "Edit",
            title: "Crud",
            subMenu: [
              {
                icon: "",
                pathname: "/top-menu/crud-data-list",
                title: "Data List",
              },
              {
                icon: "",
                pathname: "/top-menu/crud-form",
                title: "Form",
              },
            ],
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
                pathname: "/top-menu/wizard-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/wizard-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/top-menu/wizard-layout-3",
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
                pathname: "/top-menu/blog-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/blog-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/top-menu/blog-layout-3",
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
                pathname: "/top-menu/pricing-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/pricing-layout-2",
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
                pathname: "/top-menu/invoice-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/invoice-layout-2",
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
                pathname: "/top-menu/faq-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/top-menu/faq-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/top-menu/faq-layout-3",
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
            pathname: "/top-menu/update-profile",
            title: "Update profile",
          },
          {
            icon: "",
            pathname: "/top-menu/change-password",
            title: "Change Password",
          },
        ],
      },
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
                pathname: "/top-menu/regular-table",
                title: "Regular Table",
              },
              {
                icon: "",
                pathname: "/top-menu/tabulator",
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
                pathname: "/top-menu/modal",
                title: "Modal",
              },
              {
                icon: "",
                pathname: "/top-menu/slide-over",
                title: "Slide Over",
              },
              {
                icon: "",
                pathname: "/top-menu/notification",
                title: "Notification",
              },
            ],
          },
          {
            icon: "",
            pathname: "/top-menu/tab",
            title: "Tab",
          },
          {
            icon: "",
            pathname: "/top-menu/accordion",
            title: "Accordion",
          },
          {
            icon: "",
            pathname: "/top-menu/button",
            title: "Button",
          },
          {
            icon: "",
            pathname: "/top-menu/alert",
            title: "Alert",
          },
          {
            icon: "",
            pathname: "/top-menu/progress-bar",
            title: "Progress Bar",
          },
          {
            icon: "",
            pathname: "/top-menu/tooltip",
            title: "Tooltip",
          },
          {
            icon: "",
            pathname: "/top-menu/dropdown",
            title: "Dropdown",
          },
          {
            icon: "",
            pathname: "/top-menu/typography",
            title: "Typography",
          },
          {
            icon: "",
            pathname: "/top-menu/",
            title: "",
          },
          {
            icon: "",
            pathname: "/top-menu/loading-",
            title: "Loading ",
          },
        ],
      },
      {
        icon: "Sidebar",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/top-menu/regular-form",
            title: "Regular Form",
          },
          {
            icon: "",
            pathname: "/top-menu/datepicker",
            title: "Datepicker",
          },
          {
            icon: "",
            pathname: "/top-menu/tom-select",
            title: "Tom Select",
          },
          {
            icon: "",
            pathname: "/top-menu/file-upload",
            title: "File Upload",
          },
          {
            icon: "",
            pathname: "/top-menu/wysiwyg-editor",
            title: "Wysiwyg Editor",
          },
          {
            icon: "",
            pathname: "/top-menu/validation",
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
            pathname: "/top-menu/chart",
            title: "Chart",
          },
          {
            icon: "",
            pathname: "/top-menu/slider",
            title: "Slider",
          },
          {
            icon: "",
            pathname: "/top-menu/image-zoom",
            title: "Image Zoom",
          },
        ],
      },
    ],
  },
});

export { topMenu };
