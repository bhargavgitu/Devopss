document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const menuToggle = document.querySelector(".menu-toggle")
  const menu = document.querySelector(".menu")

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active")
  })

  // Property data
  const properties = [
    {
      id: 1,
      title: "Modern Apartment with Ocean View",
      location: "Miami Beach, FL",
      price: "$450,000",
      type: "sale",
      isNew: true,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "This stunning modern apartment offers breathtaking ocean views from every room. Featuring an open floor plan, high-end finishes, and a private balcony, this property is perfect for those seeking luxury living by the beach.",
      features: [
        "Air Conditioning",
        "Swimming Pool",
        "Gym",
        "Parking",
        "Security",
        "Elevator",
        "Balcony",
        "Pet Friendly",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "+1 (555) 123-4567",
        email: "sarah@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      id: 2,
      title: "Luxury Villa with Private Pool",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      type: "sale",
      isNew: false,
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "This magnificent luxury villa offers the ultimate in privacy and comfort. With 5 bedrooms, 4 bathrooms, and a stunning private pool, this property is perfect for entertaining and family living. The gourmet kitchen and spacious living areas make this a true dream home.",
      features: [
        "Private Pool",
        "Garden",
        "Home Theater",
        "Wine Cellar",
        "Smart Home",
        "Fireplace",
        "Garage",
        "Security System",
      ],
      agent: {
        name: "Michael Chen",
        phone: "+1 (555) 987-6543",
        email: "michael@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      id: 3,
      title: "Cozy Studio in Downtown",
      location: "New York, NY",
      price: "$2,200/month",
      type: "rent",
      isNew: true,
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "This stylish studio apartment is located in the heart of downtown. Perfect for young professionals, it offers modern amenities, a fully equipped kitchen, and is within walking distance to restaurants, shops, and public transportation.",
      features: [
        "Air Conditioning",
        "Furnished",
        "Laundry",
        "Elevator",
        "Security",
        "Fitness Center",
        "Rooftop Deck",
        "Pet Friendly",
      ],
      agent: {
        name: "Jessica Williams",
        phone: "+1 (555) 234-5678",
        email: "jessica@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      id: 4,
      title: "Family Home with Garden",
      location: "Seattle, WA",
      price: "$750,000",
      type: "sale",
      isNew: false,
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "This charming family home offers 4 bedrooms, 3 bathrooms, and a beautiful garden. Located in a quiet neighborhood with excellent schools, it's perfect for families. The spacious kitchen and living areas make it ideal for both everyday living and entertaining.",
      features: [
        "Garden",
        "Garage",
        "Fireplace",
        "Basement",
        "Central Heating",
        "Air Conditioning",
        "Storage",
        "Patio",
      ],
      agent: {
        name: "David Thompson",
        phone: "+1 (555) 345-6789",
        email: "david@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      location: "Chicago, IL",
      price: "$1,200,000",
      type: "sale",
      isNew: true,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      image:
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      description:
        "This luxurious penthouse offers breathtaking city views from its floor-to-ceiling windows and private terrace. With 3 bedrooms, 2 bathrooms, and high-end finishes throughout, this property represents the pinnacle of urban living.",
      features: ["Terrace", "Concierge", "Gym", "Parking", "Security", "Elevator", "Smart Home", "Wine Cellar"],
      agent: {
        name: "Emily Rodriguez",
        phone: "+1 (555) 456-7890",
        email: "emily@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      id: 6,
      title: "Waterfront Cottage",
      location: "Lake Tahoe, CA",
      price: "$3,500/week",
      type: "rent",
      isNew: false,
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      image:
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "This charming waterfront cottage offers a peaceful retreat with stunning lake views. Perfect for vacations, it features 3 bedrooms, 2 bathrooms, a fully equipped kitchen, and a private dock. Enjoy water activities, hiking, and relaxation in this beautiful setting.",
      features: ["Waterfront", "Dock", "Fireplace", "Deck", "BBQ", "Parking", "Fully Equipped Kitchen", "Washer/Dryer"],
      agent: {
        name: "Robert Kim",
        phone: "+1 (555) 567-8901",
        email: "robert@dreamhomes.com",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
      },
      gallery: [
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      ],
    },
  ]

  // Load properties
  const propertiesContainer = document.getElementById("properties-container")
  let currentFilter = "all"
  let displayedProperties = 3 // Number of properties to show initially

  // Filter properties
  function filterProperties(filter) {
    currentFilter = filter
    displayedProperties = 3 // Reset displayed count when filter changes
    renderProperties()

    // Update active filter button
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active")
    })
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active")
  }

  // Render properties based on filter
  function renderProperties() {
    propertiesContainer.innerHTML = ""

    let filteredProperties = properties
    if (currentFilter !== "all") {
      if (currentFilter === "new") {
        filteredProperties = properties.filter((property) => property.isNew)
      } else {
        filteredProperties = properties.filter((property) => property.type === currentFilter)
      }
    }

    // Show only the number of properties specified by displayedProperties
    const propertiesToShow = filteredProperties.slice(0, displayedProperties)

    propertiesToShow.forEach((property) => {
      const propertyCard = createPropertyCard(property)
      propertiesContainer.appendChild(propertyCard)
    })

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("load-more-btn")
    if (displayedProperties >= filteredProperties.length) {
      loadMoreBtn.style.display = "none"
    } else {
      loadMoreBtn.style.display = "inline-block"
    }
  }

  // Create property card
  function createPropertyCard(property) {
    const card = document.createElement("div")
    card.className = "property-card"
    card.dataset.id = property.id

    let tagClass = ""
    let tagText = ""

    if (property.type === "sale") {
      tagClass = "tag-sale"
      tagText = "For Sale"
    } else if (property.type === "rent") {
      tagClass = "tag-rent"
      tagText = "For Rent"
    }

    if (property.isNew) {
      tagClass = "tag-new"
      tagText = "New Listing"
    }

    card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-tag ${tagClass}">${tagText}</div>
                <div class="property-price">${property.price}</div>
            </div>
            <div class="property-details">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</div>
                <div class="property-features">
                    <div class="feature-item"><i class="fas fa-bed"></i> ${property.bedrooms} Beds</div>
                    <div class="feature-item"><i class="fas fa-bath"></i> ${property.bathrooms} Baths</div>
                    <div class="feature-item"><i class="fas fa-vector-square"></i> ${property.area} Sq Ft</div>
                </div>
            </div>
            <div class="property-footer">
                <a href="#" class="view-details">View Details</a>
                <button class="favorite-btn"><i class="far fa-heart"></i></button>
            </div>
        `

    // Add event listener to view details
    card.querySelector(".view-details").addEventListener("click", (e) => {
      e.preventDefault()
      openPropertyModal(property.id)
    })

    // Add event listener to favorite button
    card.querySelector(".favorite-btn").addEventListener("click", function () {
      this.classList.toggle("active")
      this.innerHTML = this.classList.contains("active")
        ? '<i class="fas fa-heart"></i>'
        : '<i class="far fa-heart"></i>'
    })

    return card
  }

  // Load more properties
  document.getElementById("load-more-btn").addEventListener("click", () => {
    displayedProperties += 3 // Increase the number of displayed properties
    renderProperties()
  })

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      filterProperties(filter)
    })
  })

  // Property modal
  const modal = document.getElementById("property-modal")
  const modalContent = document.getElementById("modal-property-details")
  const closeModal = document.querySelector(".close-modal")

  function openPropertyModal(propertyId) {
    const property = properties.find((p) => p.id === propertyId)

    if (!property) return

    modalContent.innerHTML = `
            <div class="property-detail-header">
                <div class="property-detail-title">
                    <h2>${property.title}</h2>
                    <div class="property-detail-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</div>
                </div>
                <div class="property-detail-price">${property.price}</div>
            </div>
            
            <div class="property-detail-gallery">
                <div class="gallery-main">
                    <img src="${property.gallery[0]}" alt="${property.title}">
                </div>
                <div class="gallery-thumbs">
                    <div class="gallery-thumb">
                        <img src="${property.gallery[1]}" alt="${property.title}">
                    </div>
                    <div class="gallery-thumb">
                        <img src="${property.gallery[2]}" alt="${property.title}">
                    </div>
                </div>
            </div>
            
            <div class="property-detail-info">
                <div class="property-detail-description">
                    <h3>Description</h3>
                    <p>${property.description}</p>
                </div>
                
                <div class="property-detail-features">
                    <h3>Property Features</h3>
                    <ul class="features-list">
                        ${property.features.map((feature) => `<li><i class="fas fa-check"></i> ${feature}</li>`).join("")}
                    </ul>
                </div>
            </div>
            
            <div class="property-detail-agent">
                <div class="agent-image">
                    <img src="${property.agent.image}" alt="${property.agent.name}">
                </div>
                <div class="agent-info">
                    <h3>${property.agent.name}</h3>
                    <p>Listing Agent</p>
                    <div class="agent-contact">
                        <a href="tel:${property.agent.phone}"><i class="fas fa-phone"></i> Call</a>
                        <a href="mailto:${property.agent.email}"><i class="fas fa-envelope"></i> Email</a>
                    </div>
                </div>
            </div>
            
            <div class="property-detail-actions">
                <button class="action-btn schedule-btn">Schedule a Tour</button>
                <button class="action-btn contact-btn">Contact Agent</button>
            </div>
        `

    modal.style.display = "block"
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto" // Re-enable scrolling
  })

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      if (email) {
        alert(`Thank you for subscribing with ${email}! You will now receive our latest property updates.`)
        this.reset()
      }
    })
  }

  // Initialize the page
  renderProperties()
})
