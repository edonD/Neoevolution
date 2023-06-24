export const generateBreadcrumbItems = (path, router) => {
  const pathItems = path.split("/").filter((item) => item !== "");

  let breadcrumbItems = [];
  let subBreadCrumbItemsForProjects = [];

  let subBreadCrumbItemsForprojectName = [];
  let subBreadCrumbItemsFormodelName = [];

  let url = "";
  let label = "";

  for (let i = 0; i < pathItems.length; i++) {
    console.log("Pathname", pathItems, "length", pathItems.length);
    if (pathItems[i] === "[projectName]") {
      const { projectName } = router.query; // Access the dynamic segment value from router.query
      console.log("PathItems-i", router.query);
      label = projectName;
      url += `/${projectName}`;
      subBreadCrumbItemsForprojectName.push({ label, url });

      continue;
      // breadcrumbItems.push({ label, url });
    } else if (pathItems[i] === "[...modelName]") {
      const { modelName } = router.query; // Access the dynamic segment value from router.query
      if (Array.isArray(modelName)) {
        console.log("PathItems-i", modelName);
        modelName.forEach((item, index) => {
          label = item;
          url += `/${item}`;

          subBreadCrumbItemsFormodelName.push({ label, url });

          // Rest of your code using label and url
        });
        // continue;
      } else {
        console.log("PathItems-i", modelName);
        label = modelName;
        url += `/${modelName}`;

        subBreadCrumbItemsFormodelName.push({ label, url });
        // Rest of your code using label and url
        // continue;
      }
    } else if (pathItems[i] === "projects") {
      console.log("NEXT", pathItems[i]);
      label = pathItems[i].replace(/-/g, " ");
      url += `/${pathItems[i]}`;
      subBreadCrumbItemsForProjects.push({ label, url });

      continue;
    }
  }
  // Check if subBreadCrumbItemsForProjects exists
  if (subBreadCrumbItemsForProjects) {
    breadcrumbItems.push(...subBreadCrumbItemsForProjects);
  }

  // Check if subBreadCrumbItemsForprojectName exists
  if (subBreadCrumbItemsForprojectName) {
    breadcrumbItems.push(...subBreadCrumbItemsForprojectName);
  }

  // Check if subBreadCrumbItemsFormodelName exists
  if (subBreadCrumbItemsFormodelName) {
    breadcrumbItems.push(...subBreadCrumbItemsFormodelName);
  }

  return breadcrumbItems.flat();
};

export const breadcrumbHome = { icon: "pi pi-home", to: "/" };
